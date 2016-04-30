var React = require('react');

var Question = React.createClass({
  getInitialState: function () {
    return { valueSelected: null };
  },

  handleSelect: function (points) {
    this.updateScore(points);
    this.props.answerQuestion();
  },

  updateScore: function (points) {
    // At first I had an increaseScore function to add points to the
    // patient score. However, I realized that if the patient changes
    // his or her answer, points will continue to be added to the score.
    // I solved this problem by keeping track of the chosen option's
    // points and adding or subtracting points if a new option's points
    // are higher or lower than that previous choice.

    if (this.state.valueSelected === "null") {
      this.props.increaseScore(points);
    } else if (points > this.state.valueSelected) {
      this.increaseScore(points - this.state.valueSelected);
    } else if (points < this.state.valueSelected) {
      this.decreaseScore(this.state.valueSelected - points);
    }
    this.setState({ valueSelected: points });
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
          <div className="col-sm-12">
            <input type="radio" name="points" id="0" className="answer"
                   onClick={this.handleSelect.bind(this, 0)} />
            <label for="0">Not at all</label>
          </div>

          <div className="col-sm-12">
            <input type="radio" name="points" id="1" className="answer"
                   onClick={this.handleSelect.bind(this, 1)} />
            <label for="1">Several days</label>
          </div>

          <div className="col-sm-12">
            <input type="radio" name="points" id="2" className="answer"
                   onClick={this.handleSelect.bind(this, 2)} />
            <label for="2">More than half the days in the week</label>
          </div>

          <div className="col-sm-12">
            <input type="radio" name="points" id="3" className="answer"
                   onClick={this.handleSelect.bind(this, 3)} />
            <label for="3">Nearly every day</label>
          </div>
        </form>
      </li>
    );
  }
});

module.exports = Question;
