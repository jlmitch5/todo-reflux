'use strict';
var Reflux = require('reflux');
var _ = require('underscore');
var request = require('superagent');

var Todo = require('./todo.js');
var TodoActions = require('./todo_actions.js');

/**
 * Store handles all logic related to Todo Data.
 * Such as adding, removing, and toggling of one or multiple Todos
 *
 * The store listens to actions triggered by TodoActions
 */
var TodoListStore = Reflux.createStore({
    listenables: [TodoActions],
    init: function () {
        this.listenTo(TodoActions.load, this.fetchData);
    },
    getInitialState: function () {
        this.list = [];
        return this.list;
    },
    fetchData: function () {
        request.get('/todos/', function (res) {
            var todos = JSON.parse(res.text).todos;
            this.list = todos.map(function (todo) {
                return new Todo(todo.key, todo.title, todo.isChecked, todo.createdAt);
            });
            this.todoCounter = this.list.length + 1;
            this.trigger(this.list);
        }.bind(this));
    },
    onCompleteTodo: function (key) {
        var todoItem = _.find(this.list, function (item) {
            return item.key === key;
        });

        todoItem.isChecked = !todoItem.isChecked;
        this.updateList(this.list);
    },
    onAddTodo: function (todo) {
        this.updateList([
            new Todo(this.todoCounter++, todo, false, new Date())
        ].concat(this.list));
    },
    onRemoveTodo: function (key) {
        var list = _.reject(this.list, function (item) {
            return item.key === key;
        }); 

        if (_.isEmpty(list)) {
            this.todoCounter = 1;
        }

        this.updateList(list);
    },
    onCompleteAll: function () {
        var list = this.list;
        list.forEach(function (item) {
            item.isChecked = true;
        });

        this.updateList(list);
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    }
});

module.exports = TodoListStore;

