'use strict';
var React = require('react');
var Reflux = require('reflux');

var TodoContainer = require('./todo_container.jsx');
var TodoStore = require('./todo_store.js');

var App = React.createClass({
    mixins: [Reflux.connect(TodoStore, "list")],
    render: function () {
        return (
            <TodoContainer todos={this.state.list} />
        );
    }
});


module.exports = App;
