'use strict';
// http://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
module.exports = (function() {

    Array.prototype.move = function (oldIndex, newIndex) {
        if (newIndex >= this.length) {
            var k = newIndex - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
        return this;
    };
})();
