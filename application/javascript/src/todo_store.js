var Reflux = require('reflux');

var TodoActions = require('./todo_actions.js');

var TodoListStore = Reflux.createStore({
    listenables: [TodoActions],
    getInitialState: function () {
        this.list = ["yo", "flo", "ro"];
        return this.list;
    },

    onCompleteItem: function (item) {
       console.log("completed item");                 
    },
    onCompleteAll: function () {
        console.log("completed all");               
    },
    onAddItem: function (item) {
        this.updateList([item].concat(this.list));
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    }
});

module.exports = TodoListStore;

