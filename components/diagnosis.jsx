var React = require('react');
var Contact = require('./contact');

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
        <p>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</p>
        <p>You scored {this.props.score}/27</p>
        <h2>Depression Severity: {this.getDiagnosis()}</h2>

        <Contact />
      </div>
    );
  }
});

module.exports = Diagnosis;
