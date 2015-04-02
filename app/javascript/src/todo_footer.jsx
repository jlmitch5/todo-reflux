'use strict';
var React = require('react');

var TodoActions = require('./todo_actions.js');
var TodoCounter = require('./todo_counter.jsx');

/**
 * Footer contains how many toods are left to complete and
 * handles checking of all todos.
 *
 * @completeAll TodoActions#completeAll->onCompleteAll();
 * @removeAll TodoActions#removeAll->onRemoveAll();
 */
var TodoFooter = React.createClass({
    displayName: 'TodoFooter',
    deleteAll: function () {
        TodoActions.removeAll();
    },
    markAllCompleted: function () {
        TodoActions.completeAll();
    },
    render: function () {
        return (
            <ul>
                <li className="todos-left">
                    <TodoCounter todos={this.props.todos} />
                </li>
                <li className="clear-all">
                    <a onClick={this.markAllCompleted}>Mark all as complete</a>
                </li>
                <li className="delete-all">
                    <a onClick={this.deleteAll}>Delete all todos</a>
                </li>
            </ul>
        );
    }
});

module.exports = TodoFooter;
