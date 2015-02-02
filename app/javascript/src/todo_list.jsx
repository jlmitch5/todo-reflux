'use strict';
var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoItem = require('./todo_item.jsx');

var TodoList = React.createClass({
    propTypes: {
        todos: React.PropTypes.array           
    },
    render: function () {
        if (this.props.todos.length) {
            var items = this.props.todos.map(function(item) {
                return <TodoItem todo={item} key={item.key} />;
            });

            return (<ul>
                <ReactCSSTransitionGroup transitionName="jelly">
                    {items}
                </ReactCSSTransitionGroup>
            </ul>);
        } else {
            return (<div className="empty-list">There is nothing here! Why dont you add something?</div>);
        }
    }
});

module.exports = TodoList;
