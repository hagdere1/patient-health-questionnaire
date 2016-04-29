var React = require('react');

var Contact = React.createClass({
  selectTherapist: function (therapist) {
    this.props.selectTherapist(therapist);
  },

  render: function () {
    return (
      <div>
        <input type="radio" name="therapist" onClick={this.selectTherapist.bind(this, this.props.therapist)} />
        <ul>
          <li>{this.props.therapist["name"]}</li>
          <li>{this.props.therapist["clinic"]}</li>
          <li>{this.props.therapist["addrStreet"]}</li>
          <li>{this.props.therapist["addrCity"]}</li>
          <li>{this.props.therapist["phone"]}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Contact;
