'use strict';
var React = require('react');

var TodoActions = require('./todo_actions.js');

var TodoAddForm = React.createClass({
    submitTodo: function (event) {
        var todoTitle = this.refs.todo.getDOMNode().value.trim();
        TodoActions.addItem(todoTitle);
        this.refs.todo.getDOMNode().value = '';
        event.preventDefault();
    },
    render: function () {
        return (
            <form onSubmit={this.submitTodo}>
                <input className="input" type="text" placeholder="What needs to be done" ref="todo" />
                <input className="button" type="submit" value="Add Todo" />
            </form>
        );        
    }
});

module.exports = TodoAddForm;
