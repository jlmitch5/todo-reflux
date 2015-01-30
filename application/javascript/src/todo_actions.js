var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "completeItem",     //called when ticking checkbox
    "addItem",          //called when clicking Add todo button
    "removeItem",       //called when click the Trash icon
    "completeAll"       //called when clicking link in footer
]);


module.exports = TodoActions;
