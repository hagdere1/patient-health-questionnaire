var React = require('react');

var Question = React.createClass({
  render: function () {
    return (
      <li>
        {this.props.question}
        <form>
          <input type="radio" name="points" id="0" />
          <label for="0">Not at all</label>

          <input type="radio" name="points" id="1" />
          <label for="1">Several days</label>

          <input type="radio" name="points" id="2" />
          <label for="2">More than half the days</label>

          <input type="radio" name="points" id="3" />
          <label for="3">Nearly every day</label>
        </form>
      </li>
    );
  }
});

module.exports = Question;
