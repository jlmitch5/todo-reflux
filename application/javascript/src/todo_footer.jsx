var React = require('react');

var TodoActions = require('./todo_actions.js');

var TodoCounter = require('jsx!./todo_counter.jsx');

var TodoFooter = React.createClass({
    markAllCompleted: function () {
        TodoActions.completeAll();                  
    },
    render: function () {
        return (
            <ul>
                <li className="todos-left"><TodoCounter todos={this.props.todos} /></li>
                <li className="clear-all"><a onClick={this.markAllCompleted}>Mark all as complete</a></li>
            </ul>
        );        
    }
});

module.exports = TodoFooter;
