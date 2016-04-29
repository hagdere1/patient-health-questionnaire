var React = require('react');
var ReactDOM = require('react-dom');
var Questionnaire = require('./questionnaire');

var App = React.createClass({
  getInitialState: function () {
    return { formSubmitted: false,
             doctorSelected: false,
             score: 0 };
  },

  submitForm: function () {
    this.setState({ formSubmitted: true });
    // alert("Submitted form!");
    console.log(this.state.formSubmitted);
  },

  selectDoctor: function () {
    this.setState({ doctorSelected: true });
  },

  increaseScore: function (points) {
    var score = this.state.score += points;
    this.setState({ score: score });
    console.log(this.state.score);
  },

  decreaseScore: function (points) {
    var score = this.state.score -= points;
    this.setState({ score: score });
    console.log(this.state.score);
  },

  render: function () {
    if (this.state.formSubmitted === false) {
      return <Questionnaire submitForm={this.submitForm} increaseScore={this.increaseScore} decreaseScore={this.decreaseScore}/>;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
