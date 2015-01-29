var Reflux = require('reflux');

var TodoActions = require('./todo_actions.js');

var TodoListStore = Reflux.createStore({
    listenables: [TodoActions],
    getInitialState: function () {
        this.list = [];
        return this.list;
    },

    onCompleteItem: function (item) {
       console.log("completed item");                 
    },
    onAddItem: function (item) {
       console.log("added item"); 
    },
    updateList: function (list) {
        this.list = list;
        this.trigger(list);
    }
});

module.exports = TodoListStore;

