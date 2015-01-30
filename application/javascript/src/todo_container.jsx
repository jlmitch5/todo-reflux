var React = require('react');

var TodoList = require('jsx!./todo_list.jsx');
var TodoAddForm = require('jsx!./todo_add_form.jsx');
var TodoFooter = require('jsx!./todo_footer.jsx');


var TodoContainer = React.createClass({
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
                    <TodoList todos={this.props.todos}/>
                </div>
                <div className="todo-footer">
                    <TodoFooter todos={this.props.todos} />
                </div>
            </div>    
        );        
    }
});


module.exports = TodoContainer;
