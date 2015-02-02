'use strict';

var Todo = function (key, title, isChecked, createdAt) {
    this.key = key;
    this.title = title;
    this.isChecked = isChecked;
    this.createdAt = createdAt;
};

module.exports = Todo;
