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
              "Trouble concentrating on things, such as reading the \
              newspaper or watching television?",
              "Moving or speaking so slowly that other people could have \
              noticed? Or the opposite - being so fidgety or restless \
              that you have been moving around a lot more than usual?",
              "Thoughts that you would be better off dead, or of hurting \
              yourself in some way?"],

  getInitialState: function () {
    return { errorMsgDisplayed: false,
             questionsAnswered: 0 };
  },

  submitForm: function (e) {
    e.preventDefault();
    if (this.state.questionsAnswered === 9) {
      this.props.submitForm();
    } else {
      this.setState({ errorMsgDisplayed: true });
    }
  },

  answerQuestion: function () {
    var questionsAnswered = this.state.questionsAnswered += 1;
    this.setState({ questionsAnswered: questionsAnswered });
    if (this.state.questionsAnswered === 9 && this.state.errorMsgDisplayed) {
      this.setState({ errorMsgDisplayed: false });
    }
  },

  errorMessage: function () {
    if (this.state.errorMsgDisplayed) {
      return <p className="text-danger">Please answer all the questions.</p>;
    } else {
      return <p></p>;
    }
  },

  render: function () {
    return (
      <div className="container">
        <div className="span12">
          <h1>Patient Health Questionnaire (PHQ-9)</h1>
          <p>Over the last two weeks, how often have you been bothered by
          any of the following problems?</p>
          {this.errorMessage()}
          <ul className="list-unstyled">
            {this.questions.map(function (question, idx) {
              return <Question key={idx}
                               className="question"
                               question={question}
                               increaseScore={this.props.increaseScore}
                               decreaseScore={this.props.decreaseScore}
                               answerQuestion={this.answerQuestion} />;
            }.bind(this))}
          </ul>
          <button className="btn btn-primary"
                  onClick={this.submitForm}>Submit</button>
        </div>
      </div>
    );
  }
});

module.exports = Questionnaire;
