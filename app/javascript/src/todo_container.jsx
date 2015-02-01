'use strict';
var React = require('react');

var TodoActions = require('./todo_actions.js');
var TodoList = require('./todo_list.jsx');
var TodoForm = require('./todo_form.jsx');
var TodoFooter = require('./todo_footer.jsx');


var TodoContainer = React.createClass({
    componentDidMount: function () {
        TodoActions.load();
    },
    render: function () {
        return (
            <div className="pure-g-r container">
                <div className="pure-u-1 headline">
                    <h1>Todos</h1>
                </div>
                <div className="pure-u-1 form">
                    <TodoForm />
                </div>
                <div className="pure-u-1 todo-list">
                    <TodoList todos={this.props.todos}/>
                </div>
                <div className="pure-u-1 footer">
                    <TodoFooter todos={this.props.todos} />
                </div>
            </div>    
        );        
    }
});


module.exports = TodoContainer;
