jest.dontMock('../application/javascript/src/todo_list.jsx');
jest.dontMock('../application/javascript/src/todo_item.jsx');

describe('TodoList', function () {
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    var TodoList = require('../application/javascript/src/todo_list.jsx');

    describe('renders', function () {
        
        it('an empty container when there is no todos', function () {
            var container = TestUtils.renderIntoDocument(<TodoList todos={[]}/>);

            expect(container.getDOMNode().textContent).not.toBe('');

        }); 
    });
});
