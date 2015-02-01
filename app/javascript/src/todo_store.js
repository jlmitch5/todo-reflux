'use strict';
var Reflux = require('reflux');
var _ = require('underscore');
var request = require('superagent');


var TodoActions = require('./todo_actions.js');

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
            this.list = JSON.parse(res.text).todos;
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
    onCompleteAll: function () {
        var list = this.list;
        list.forEach(function (item) {
            item.isChecked = true;
        });
        this.updateList(list);
    },
    onAddTodo: function (item) {
        this.updateList([{
            title: item,
            isChecked: false,
            key: this.todoCounter++
        }].concat(this.list));
    },
    onRemoveTodo: function (key) {
        var list = _.reject(this.list, function (item) {
            return item.key === key;
        });        
        this.updateList(list);
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    }
});

module.exports = TodoListStore;

