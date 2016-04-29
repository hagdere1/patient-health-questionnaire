var React = require('react');
var ReactDOM = require('react-dom');
var Questionnaire = require('./questionnaire');

var App = React.createClass({
  render: function () {
    return (
      <Questionnaire />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('root'));
});
