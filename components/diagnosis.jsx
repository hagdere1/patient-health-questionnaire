var React = require('react');

var Diagnosis = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.score}
      </div>
    );
  }
});

module.exports = Diagnosis;
