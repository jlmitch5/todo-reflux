'use strict';
var Header = function () {

    var headTag = document.head;
    var viewPortMetaTag = document.createElement('meta');
    var titleTag = document.createElement('title');

    viewPortMetaTag.name = 'viewport';
    viewPortMetaTag.content = 'width=device-width, initial-scale=1';

    titleTag.innerHTML = 'Todilos';

    headTag.appendChild(viewPortMetaTag);
    headTag.appendChild(titleTag);

};

module.exports = Header;
