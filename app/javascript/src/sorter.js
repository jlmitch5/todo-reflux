'use strict';
var _ = require('underscore');

var TodoActions = require('./todo_actions.js');

/**
 * Sorter for Todolist
 *
 * Initialize with Sorter.initialize();
 */
var Sorter = function () {

    var sourceElement = null;
    var currentId = 0;

    function handleDragStart(e) {
        /* jshint validthis:true */
        sourceElement = this;
        currentId = this.dataset.id;

        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDrop() {
        /* jshint validthis:true */
        if (sourceElement !== this) {
            TodoActions.resortList(Number(currentId), Number(this.dataset.id));
        }


        return false;
    }

    this.initialize = function (selector) {
        this.selector = selector;
        this.ids = _.map(document.querySelectorAll('li.todo-item'), function (node) {
            return node.dataset.id;
        });

        [].forEach.call(selector, function (node) {
            node.addEventListener('dragstart', handleDragStart, false);
            node.addEventListener('dragover', handleDragOver, false);
            node.addEventListener('drop', handleDrop.bind(node), false);
        }.bind(this));
    };
};

module.exports = Sorter;
