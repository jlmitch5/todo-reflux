'use strict';
var Reflux = require('reflux');
var request = require('superagent');

var TodoActions = Reflux.createActions([
    "load",             //called when entering the page
    "completeTodo",     //called when ticking checkbox
    "addTodo",          //called when clicking Add todo button
    "removeTodo",       //called when click the Trash icon
    "completeAll"       //called when clicking link in footer
]);


TodoActions.addTodo.preEmit = function (todo) {
    request.post('/todos/', {todo: todo}, function () {});
};

TodoActions.removeTodo.preEmit = function (id) {
    request.del('/todos/'+id+'/', function () {});
};

TodoActions.completeTodo.preEmit = function (id) {
    request.put('/todos/'+id+'/', function () {});
};

TodoActions.completeAll.preEmit = function(todo) {
    request.put('/todos/check-all/', function () {});
};

module.exports = TodoActions;
