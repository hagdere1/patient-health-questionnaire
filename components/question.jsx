var React = require('react');

var Question = React.createClass({
  getInitialState: function () {
    return { valueSelected: null };
  },

  changeScore: function (points) {
    if (this.state.valueSelected === "null") {
      this.setState({ valueSelected: points });
      this.props.increaseScore(points);
    } else if (points > this.state.valueSelected) {
      this.setState({ valueSelected: points });
      this.increaseScore(points - this.state.valueSelected);
    } else if (points < this.state.valueSelected) {
      this.setState({ valueSelected: points });
      this.decreaseScore(this.state.valueSelected - points);
    }
  },

  increaseScore: function (points) {
    this.props.increaseScore(points);
  },

  decreaseScore: function (points) {
    this.props.decreaseScore(points);
  },

  render: function () {
    return (
      <li>
        {this.props.question}
        <form>
          <input type="radio" name="points" id="0" onClick={this.changeScore.bind(this, 0)} />
          <label for="0">Not at all</label>

          <input type="radio" name="points" id="1" onClick={this.changeScore.bind(this, 1)} />
          <label for="1">Several days</label>

          <input type="radio" name="points" id="2" onClick={this.changeScore.bind(this, 2)} />
          <label for="2">More than half the days</label>

          <input type="radio" name="points" id="3" onClick={this.changeScore.bind(this, 3)} />
          <label for="3">Nearly every day</label>
        </form>
      </li>
    );
  }
});

module.exports = Question;
