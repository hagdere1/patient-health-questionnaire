var React = require('react');
var Contact = require('./contact');

var Diagnosis = React.createClass({
  // Ideally, this physician info would be in a separate file, but for
  // the purposes of this exercise and simplicity's sake I've placed in
  // this component to be passed down to each Contact component.
  therapists: [
                {
                  "name": "Dr. Joseph Lister",
                  "clinic": "Capitol Community Health Center",
                  "addrStreet": "3909 Massachusetts Avenue",
                  "addrCity": "Washington, Washington D.C. 20011",
                  "phone": "202-723-3976"
                },
                {
                  "name": "Dr. Walter Reed",
                  "clinic": "Hillside Community Health Center",
                  "addrStreet": "263 Woodland Drive",
                  "addrCity": "Hillside, Illinois 60162",
                  "phone": "708-947-3604"
                },
                {
                  "name": "Dr. Henry Heimlich",
                  "clinic": "Lanai City Community Health Center",
                  "addrStreet": "4438 Everette Alley",
                  "addrCity": "Lanai City, Hawaii 96763",
                  "phone": "954-851-8889"
                }
              ],

  getInitialState: function () {
    return { errorMsgDisplayed: false,
             therapistSelected: false };
  },

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

  selectTherapist: function (therapist) {
    this.setState({ therapistSelected: true });
    // Remove error message if user selects an option
    if (this.state.errorMsgDisplayed) {
      this.setState({ errorMsgDisplayed: false });
    }
    this.props.selectTherapist(therapist);
  },

  contactTherapist: function (e) {
    e.preventDefault();
    if (this.state.therapistSelected) {
      this.props.contactTherapist();
    } else {
      this.setState({ errorMsgDisplayed: true });
    }
  },

  render: function () {
    var therapists = this.therapists.map(function (therapist) {
      return (
        <li>
          <input type="radio" name="therapist"
                 onClick={this.selectTherapist.bind(this, therapist)} />
          <Contact selectTherapist={this.props.selectTherapist}
                   therapist={therapist} />
        </li>
      );
    }.bind(this));

    var errorMessage;
    if (this.state.errorMsgDisplayed) {
      errorMessage = <p>Please select a therapist to contact.</p>;
    } else {
      errorMessage = <p></p>;
    }

    var therapistInfo;
    if (this.props.score > 9) {
      therapistInfo = (
        <div>
          <p>Please consider contacting one of the following therapists.</p>
          { errorMessage }
          <ul>{therapists}</ul>
          <button onClick={this.contactTherapist}>Submit</button>
        </div>
      );
    } else {
      therapistInfo = <p>Thank you for taking the patient health questionnaire.</p>;
    }

    return (
      <div>
        <h2>Depression Severity: {this.getDiagnosis()}</h2>
        <p>You scored {this.props.score}/27</p>
        <p>Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate,
                                15-19 moderately severe, 20-27 severe.</p>
        <form>
          {therapistInfo}
        </form>
      </div>
    );
  }
});

module.exports = Diagnosis;
