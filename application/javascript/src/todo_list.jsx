'use strict';
var React = require('react');

var TodoItem = require('jsx!./todo_item.jsx');

var TodoList = React.createClass({
    render: function () {
        var items = this.props.todos.map(function(item) {
            return <TodoItem todo={item} key={item.key} />;
        });

        if (items.length) {
            return (<ul>{items}</ul>);
        } else {
            return (<div className="empty-list">There is nothing here! Why dont you add something?</div>);
        }
    }
});

module.exports = TodoList;
