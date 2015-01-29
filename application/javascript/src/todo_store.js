var Reflux = require('reflux');
var _ = require('underscore');

var TodoActions = require('./todo_actions.js');

var TodoListStore = Reflux.createStore({
    listenables: [TodoActions],
    getInitialState: function () {
        this.todoCounter = 4;
        this.list = [
            {
                title: "Discuss report with John",
                isChecked: false,
                key: 1
            },
            {
                title: "Get a haircut",
                isChecked: true,
                key: 2
            },
            {
                title: "Pay electricity bill",
                isChecked: true,
                key: 3
            },
            {
                title: "Check gym hours",
                isChecked: false,
                key: 4
            }
        ];
        return this.list;
    },

    onCompleteItem: function (key) {
        var todoItem = _.find(this.list, function (item) {
            return item.key === key;
        });
        todoItem.isChecked = !todoItem.isChecked;
        this.updateList(this.list);
    },
    onCompleteAll: function () {
        console.log("completed all");               
    },
    onAddItem: function (item) {
        this.updateList([{
            title: item,
            isChecked: false,
            key: this.todoCounter++
        }].concat(this.list));
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list, this.todoCounter);
    }
});

module.exports = TodoListStore;

