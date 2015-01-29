var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    "completeItem",     //called when ticking checkbox
    "addItem",          //called when clicking Add todo button
    "clearAll"          //called when clicking link in footer
]);


module.exports = TodoActions;
