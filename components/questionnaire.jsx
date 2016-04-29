var React = require('react');
var Question = require('./question');

var Questionnaire = React.createClass({
  questions: ["Little interest or pleasure in doing things?",
              "Feeling down, depressed, or hopeless?",
              "Trouble falling or staying asleep, or sleeping too much?",
              "Feeling tired or having little energy?",
              "Poor appetite or overeating?",
              "Feeling bad about yourself - or that you are a failure or \
              have let yourself or your family down?",
              "Trouble concentrating on things, such as reading the newspaper \
              or watching television?",
              "Moving or speaking so slowly that other people could have \
              noticed? Or the opposite - being so fidgety or restless that \
              you have been moving around a lot more than usual?",
              "Thoughts that you would be better off dead, or of hurting \
              yourself in some way?"],

  validateForm: function () {
    // Make sure all questions answered
    return true;
  },

  submitForm: function (e) {
    if (this.validateForm()) {
      e.preventDefault();
      this.props.submitForm();
    }
  },

  render: function () {
    return (
      <div>
        <h1>Patient Health Questionnaire (PHQ-9)</h1>
        <ul>
          {this.questions.map(function (question) {
            return <Question question={question}
                             increaseScore={this.props.increaseScore}
                             decreaseScore={this.props.decreaseScore} />;
          }.bind(this))}
        </ul>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
});

module.exports = Questionnaire;
