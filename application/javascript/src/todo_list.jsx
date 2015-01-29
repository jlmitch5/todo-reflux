var React = require('react');


var TodoItem = require('jsx!./todo_item.jsx');

var TodoList = React.createClass({
    render: function () {
        var items = this.props.todos.map(function(item, index) {
            return <TodoItem todo={item} />
        });
        return (<ul>{items}</ul>);        
    }
});

module.exports = TodoList;
