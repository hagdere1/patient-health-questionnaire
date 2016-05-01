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

  contactTherapist: function () {
    this.setState({ therapistContacted: true });
  },

  selectTherapist: function (therapist) {
    this.setState({ therapist: therapist });
  },

  increaseScore: function (points) {
    this.setState({ score: this.state.score + points });
  },

  decreaseScore: function (points) {
    this.setState({ score: this.state.score - points });
  },

  render: function () {
    // Send major components props to manipulate App's state
    if (this.state.formSubmitted === false) {
      return <Questionnaire className="page"
                            submitForm={this.submitForm}
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
