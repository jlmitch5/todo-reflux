var React = require('react');
var Reflux = require('reflux');

var TodoContainer = require('jsx!./todo_container.jsx');
var TodoStore = require('./todo_store.js');

var App = React.createClass({
    mixins: [Reflux.connect(TodoStore, "list", "todoCounter")],
    render: function () {
        return (
            <TodoContainer todos={this.state.list} counter={this.state.todoCounter} />
        );
    }
});


module.exports = App;
