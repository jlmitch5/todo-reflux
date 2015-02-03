'use strict';

/**
 * Basic Todo model.
 *
 * @key Number Internal id
 * @title String Represents what to do
 * @isChecked Determines if a Todo is completed
 * @createdAt When the Todo was created.
 */
var Todo = function (key, title, isChecked, createdAt) {
    this.key = key;
    this.title = title;
    this.isChecked = isChecked;
    this.createdAt = createdAt;
};

module.exports = Todo;
