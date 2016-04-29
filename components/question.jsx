var React = require('react');

var Question = React.createClass({
  render: function () {
    return (
      <li>{this.props.question}</li>
    );
  }
});

module.exports = Question;
