var React = require('react');
var Contact = require('./contact');

var Confirmation = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="span12">
          <h3>Confirmation</h3>
          <p className="text-success">Your information has been sent to:</p>
          <Contact therapist={this.props.therapist} />
          <p>Thank you for taking the patient health questionnaire.</p>
          <p>We will contact you shortly.</p>
        </div>
      </div>
    );
  }
});

module.exports = Confirmation;
