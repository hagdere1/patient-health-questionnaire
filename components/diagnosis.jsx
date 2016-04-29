var React = require('react');

var Diagnosis = React.createClass({
  getDiagnosis: function () {
    var score = this.props.score;
    var severity;
      if (score < 5) {
        severity = "None";
      } else if (score < 10) {
        severity = "Mild";
      } else if (score < 15) {
        severity = "Moderate";
      } else if (score < 20) {
        severity = "Moderately Severe";
      } else {
        severity = "Severe";
      }
    return severity;
  },

  render: function () {
    return (
      <div>
        <p>You scored {this.props.score}/27</p>
        <h2>Depression Severity: {this.getDiagnosis()}</h2>
      </div>
    );
  }
});

module.exports = Diagnosis;
