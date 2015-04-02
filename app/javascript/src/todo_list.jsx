'use strict';
var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoItem = require('./todo_item.jsx');
var Sorter = require('./sorter.js');

var TodoList = React.createClass({
    displayName: 'TodoList',
    propTypes: {
        todos: React.PropTypes.array
    },
    componentDidMount: function () {
        setTimeout(function () {
            new Sorter().initialize(document.querySelectorAll('li.todo-item'));
        }, 500);
    },
    render: function () {
        if (this.props.todos.length) {
            var items = this.props.todos.map(function (item) {
                return <TodoItem todo={item} key={item.key} />;
            });

            return (
            <ul>
                <ReactCSSTransitionGroup transitionName="jelly">
                    {items}
                </ReactCSSTransitionGroup>
            </ul>
            );
        } else {
            return (
                <ReactCSSTransitionGroup transitionName="jelly">
                    <div className="empty-list">There is nothing here! Why dont you add something?</div>
                </ReactCSSTransitionGroup>
            );
        }
    }
});

module.exports = TodoList;
