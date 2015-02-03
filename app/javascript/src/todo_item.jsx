'use strict';
var React = require('react/addons');

var Todo = require('./todo.js');
var TodoActions = require('./todo_actions.js');

/**
 * Represents one list item and triggers the following actions
 *
 * @completeTodo TodoActions#completeTodo->#onCompleteTodo
 * @removeTodo TodoActions#removeTodo->onRemoveTodo
 */
var TodoItem = React.createClass({
    propTypes: {
        todo: React.PropTypes.instanceOf(Todo).isRequired
    },
    getInitialState: function () {
        return {
            isChecked: false
        };
    },
    handleChange: function () {
        this.setState({isChecked: !this.props.todo.isChecked});
    },
    completeTodo: function () {
        TodoActions.completeTodo(this.props.todo.key);
    },
    removeTodo: function () {
        TodoActions.removeTodo(this.props.todo.key);            
    },
    render: function () {
        var cx = React.addons.classSet;
        var todoTitleClasses = cx({
            striked: this.props.todo.isChecked
        });
        var labelClasses = cx({
            'icon-ok': this.props.todo.isChecked
        });

        return (
            <li className="todo-item" draggable="true" key={this.props.todo.key} data-id={this.props.todo.key} >
                <div>
                    <input type="checkbox" 
                           id={this.props.todo.key} 
                           name={this.props.todo.key} 
                           checked={this.state.isChecked || this.props.todo.isChecked}
                           onChange={this.handleChange}
                           onClick={this.completeTodo} /> 

                    <label htmlFor={this.props.todo.key} className={labelClasses}></label>
                    <p className={'text ' + todoTitleClasses}>
                        {this.props.todo.title}
                    </p>
                    </div>
                <div className="trash-icon">
                    <span className="icon-trash" onClick={this.removeTodo}></span>
                </div>
            </li>
        );        
    }
});

module.exports = TodoItem;
