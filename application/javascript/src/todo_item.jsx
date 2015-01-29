var React = require('react/addons');

var TodoActions = require('./todo_actions.js');

var TodoItem = React.createClass({
    getInitialState: function () {
        return {checked: false}                 
    },
    setChecked: function () {
        this.setState({checked: !this.state.checked});
        TodoActions.completeItem();
    },
    render: function () {
        var cx = React.addons.classSet;
        var cls = cx({
            striked: this.state.checked
        });
        var labelClasses = cx({
            'icon-ok': this.state.checked
        });
        return (
            <li className="todo-item">
                <input type="checkbox" id={this.props.index} name={this.props.index} onChange={this.setChecked}/> 
                <label htmlFor={this.props.index} className={labelClasses}></label>
                <p className={'text ' + cls}>
                    {this.props.data}
                </p>
            </li>
        );        
    }
});

module.exports = TodoItem;
