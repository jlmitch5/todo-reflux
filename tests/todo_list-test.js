jest.dontMock('../app/javascript/src/todo_list.jsx');
jest.dontMock('../app/javascript/src/todo_item.jsx');

describe('TodoList', function () {
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    
    jest.setMock('../app/javascript/src/todo_actions.js', {
        completeTodo: jest.genMockFn(),
        removeTodo: jest.genMockFn()
    });
    var TodoActions = require('../app/javascript/src/todo_actions.js');
    TodoActions.completeTodo.preEmit = function () {};
    TodoActions.removeTodo.preEmit = function () {};

    var TodoList = require('../app/javascript/src/todo_list.jsx');


    describe('renders', function () {
        
        it('an empty container when there is no todos', function () {
            var container = TestUtils.renderIntoDocument(<TodoList todos={[]}/>);

            expect(container.getDOMNode().textContent).not.toBe('');

        }); 
    });
});
