var React = require('react');
var Question = require('./question');

var Questionnaire = React.createClass({
  questions: ["Little interest or please in doing things?",
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

  getInitialState: function () {
    return { score: 0 };
  },

  render: function () {
    return (
      <ul>
        {this.questions.map(function (question) {
          return <Question question={question} />;
        })}
      </ul>
    );
  }
});

module.exports = Questionnaire;
