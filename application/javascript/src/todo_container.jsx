var React = require('react');
var Reflux = require('reflux');

var TodoList = require('jsx!./todo_list.jsx');
var TodoAddForm = require('jsx!./todo_add_form.jsx');
var TodoStore = require('./todo_store.js');

var TodoContainer = React.createClass({
    mixins: [Reflux.connect(TodoStore, "list")],
    render: function () {
        return (
            <div className="todo-container">
                <div className="todo-headline">
                    <h1>Todos</h1>
                </div>
                <div className="todo-form">
                    <TodoAddForm />
                </div>
                <div className="todo-list">
                    <TodoList />
                </div>
                <div className="todo-footer">
                    <ul>
                        <li className="todos-left">2 items left</li>
                        <li className="clear-all"><a>Mark all as complete</a></li>
                    </ul>
                </div>
            </div>    
        );        
    }
});


module.exports = TodoContainer;
