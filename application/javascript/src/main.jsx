'use strict';
var React = require('react');
var App = require('jsx!./app.jsx');

document.addEventListener('DOMContentLoaded', function () {
    React.render(<App />, document.body);
});
