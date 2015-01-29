var React = require('react');

var TodoActions = require('./todo_actions.js');

var TodoAddForm = React.createClass({
    submitTodo: function (event) {
        TodoActions.addItem();
        event.preventDefault();
    },
    render: function () {
        return (
            <form>
                <input className="input" type="text" placeholder="What needs to be done" />
                <input className="button" type="button" value="Add Todo" onClick={this.submitTodo}/>
            </form>
        );        
    }
});

module.exports = TodoAddForm;
