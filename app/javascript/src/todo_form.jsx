'use strict';
var React = require('react');

var TodoActions = require('./todo_actions.js');

var TodoForm = React.createClass({
    getInitialState: function () {
        return {showWarning: false};
    },
    submitTodo: function (event) {
        event.preventDefault();
        if (this.refs.todo.getDOMNode().value) {
            var todoTitle = this.refs.todo.getDOMNode().value.trim();
            TodoActions.addTodo(todoTitle);
            this.refs.todo.getDOMNode().value = '';
            this.setState({showWarning: false});
        } else {
            this.warnForEmptyField();
        }
    },
    warnForEmptyField: function () {
        this.setState({showWarning: true});
    },
    render: function () {
        var cx = React.addons.classSet;
        var cls = cx({
            tooltip: true,
            show: this.state.showWarning,
            'animation-target': this.state.showWarning
        });
        return (
            <form onSubmit={this.submitTodo}>
                <input className="input" type="text" placeholder="What needs to be done" ref="todo" />
                <input className="button" type="submit" value="Add Todo" />
                <div className={cls}>please write something</div>
            </form>
        );        
    }
});

module.exports = TodoForm;
