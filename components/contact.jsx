var React = require('react');

var Contact = React.createClass({
  // Initially I had put radio buttons within each Contact component
  // but upon refactoring moved them out to the Diagonosis component in
  // order to make Contacts reusable in Diagnosis and Confirmation.
  render: function () {
    return (
      <div>
        <ul className="list-unstyled">
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
