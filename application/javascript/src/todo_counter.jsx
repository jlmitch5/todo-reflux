var React = require('react');

var TodoCounter = React.createClass({
    render: function () {
        return (
            <span>{this.props.counter} items left</span>    
        );
    }
});

module.exports = TodoCounter;
