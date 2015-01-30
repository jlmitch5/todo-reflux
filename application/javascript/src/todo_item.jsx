var React = require('react/addons');

var TodoActions = require('./todo_actions.js');

var TodoItem = React.createClass({
    getInitialState: function () {
        return {checked: false};
    },
    handleChange: function () {
        this.setState({checked: !this.props.todo.isChecked});
    },
    completeTodo: function () {
        TodoActions.completeItem(this.props.todo.key);
    },
    render: function () {
        var cx = React.addons.classSet;
        var cls = cx({
            striked: this.props.todo.isChecked
        });
        var labelClasses = cx({
            'icon-ok': this.props.todo.isChecked
        });
        return (
            <li className="todo-item" key={this.props.todo.key}>
                <input type="checkbox" 
                       id={this.props.todo.key} 
                       name={this.props.todo.key} 
                       checked={this.state.checked || this.props.todo.isChecked}
                       onChange={this.handleChange}
                       onClick={this.completeTodo} /> 

                <label htmlFor={this.props.todo.key} className={labelClasses}></label>
                <p className={'text ' + cls}>
                    {this.props.todo.title}
                </p>
            </li>
        );        
    }
});

module.exports = TodoItem;
