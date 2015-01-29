var React = require('react');

var TodoContainer = require('jsx!./todo_container.jsx');

var App = React.createClass({
    render: function () {
        return (
            <TodoContainer />
        );
    }
});


module.exports = App;
