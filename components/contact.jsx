var React = require('react');

var Contact = React.createClass({
  render: function () {
    return (
      <ul>
        <li>{this.props.therapist["name"]}</li>
        <li>{this.props.therapist["clinic"]}</li>
        <li>{this.props.therapist["addrStreet"]}</li>
        <li>{this.props.therapist["addrCity"]}</li>
        <li>{this.props.therapist["phone"]}</li>
      </ul>
    );
  }
});

module.exports = Contact;
