var React = require('react');

var Contact = React.createClass({
  render: function () {
    return (
      <ul>
        <li>Name</li>
        <li>Clinic Name</li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
    );
  }
});

module.exports = Contact;
