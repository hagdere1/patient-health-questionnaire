var React = require('react');
var ReactDOM = require('react-dom');
var Questionnaire = require('./questionnaire');
var Diagnosis = require('./diagnosis');

var App = React.createClass({
  getInitialState: function () {
    return { formSubmitted: false,
             doctorSelected: false,
             score: 0 };
  },

  submitForm: function () {
    this.setState({ formSubmitted: true });
  },

  selectDoctor: function () {
    this.setState({ doctorSelected: true });
  },

  increaseScore: function (points) {
    var score = this.state.score += points;
    this.setState({ score: score });
  },

  decreaseScore: function (points) {
    var score = this.state.score -= points;
    this.setState({ score: score });
  },

  render: function () {
    if (this.state.formSubmitted === false) {
      return <Questionnaire submitForm={this.submitForm}
                            increaseScore={this.increaseScore}
                            decreaseScore={this.decreaseScore} />;
    } else if (this.state.doctorSelected === false) {
      return <Diagnosis score={this.state.score}/>;
    } else {
      return <div>Thank You.</div>
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
