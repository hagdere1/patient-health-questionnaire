var React = require('react');
var ReactDOM = require('react-dom');
var Questionnaire = require('./questionnaire');
var Diagnosis = require('./diagnosis');
var Confirmation = require('./confirmation');

var App = React.createClass({
  getInitialState: function () {
    return { formSubmitted: false,
             therapistContacted: false,
             therapist: null,
             score: 0 };
  },

  submitForm: function () {
    this.setState({ formSubmitted: true });
  },

  contactTherapist: function (therapist) {
    this.setState({ therapistContacted: true });
  },

  selectTherapist: function (therapist) {
    this.setState({ therapist: therapist });
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
    } else if (this.state.therapistContacted === false) {
      return <Diagnosis score={this.state.score}
                        contactTherapist={this.contactTherapist}
                        selectTherapist={this.selectTherapist} />;
    } else {
      return <Confirmation therapist={this.state.therapist} />;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
