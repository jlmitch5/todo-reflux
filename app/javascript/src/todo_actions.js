'use strict';
var Reflux = require('reflux');
var request = require('superagent');

/**
 * These actions represents all data manipulations
 * done by the app.
 *
 * Every action apart from load implements a preEmit hook
 * where it does its server communications.
 *
 * Reasoning behind not implementing callbacks is due to
 * not 'caring' about wheter a save or delete has actually happened.
 * Much like Twitter, we only acknowledge that an action has been recieved
 * by the server.
 *
 * If a callback nature architecture would be implemented
 * each successful or erroneous action would trigger its own callback action.
 *
 * Example:
 *  addTodo -> 200 OK -> addTodoSuccessfulCallback();
 */
var TodoActions = Reflux.createActions([
    "load",             //called when entering the page
    "completeTodo",     //called when ticking checkbox
    "addTodo",          //called when clicking Add todo button
    "removeTodo",       //called when click the Trash icon
    "completeAll",      //called when clicking link in footer
    "resortList"        //called when dropping a list item
]);

TodoActions.addTodo.preEmit = function (todo) {
    request.post('/todo/', {todo: todo}, function () {});
};

TodoActions.removeTodo.preEmit = function (id) {
    request.del('/todo/'+id+'/', function () {});
};

TodoActions.completeTodo.preEmit = function (id) {
    request.put('/todo/'+id+'/', {"is_checked": true}, function () {});
};

TodoActions.completeAll.preEmit = function() {
    request.put('/todos/check-all/', function () {});
};

module.exports = TodoActions;
