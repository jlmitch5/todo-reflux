var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "load",             //called when entering the page
    "completeTodo",     //called when ticking checkbox
    "addTodo",          //called when clicking Add todo button
    "removeTodo",       //called when click the Trash icon
    "completeAll"       //called when clicking link in footer
]);


module.exports = TodoActions;
