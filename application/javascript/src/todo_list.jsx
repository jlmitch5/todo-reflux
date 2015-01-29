var React = require('react');


var TodoItem = require('jsx!./todo_item.jsx');

var TodoList = React.createClass({
    render: function () {

        var items = ["Discuss report with John",
                     "Get a haircut",
                     "Pay electricity bill",
                     "Check gym hours"].map(function(item, index) {
            return <TodoItem data={item} index={index} />
        });

        return (<ul>{items}</ul>);        
    }
});

module.exports = TodoList;
