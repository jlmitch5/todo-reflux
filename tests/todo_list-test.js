jest.dontMock('../app/javascript/src/todo_list.jsx');
jest.dontMock('../app/javascript/src/todo_item.jsx');
jest.dontMock('../app/javascript/src/todo.js');

describe('TodoList', function () {
    
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    
    jest.setMock('../app/javascript/src/todo_actions.js', {
        completeTodo: jest.genMockFn(),
        removeTodo: jest.genMockFn()
    });
    
    var Todo = require('../app/javascript/src/todo.js');
    var TodoItem = require('../app/javascript/src/todo_item.jsx');
    var TodoActions = require('../app/javascript/src/todo_actions.js');
    TodoActions.completeTodo.preEmit = function () {};
    TodoActions.removeTodo.preEmit = function () {};

    var TodoList = require('../app/javascript/src/todo_list.jsx');


    describe('renders', function () {
        
        it('an empty container when there is no todos', function () {
            var container = TestUtils.renderIntoDocument(<TodoList todos={[]}/>);

            expect(container.getDOMNode().textContent).not.toBe('');

        });

        it('a todo list with 1 item', function () {
            var todos = [new Todo(1, "Title", false, new Date())]; 
            var container = TestUtils.renderIntoDocument(<TodoList todos={todos} />);

            var ul = TestUtils.findRenderedDOMComponentWithTag(container, 'ul');

            expect(ul).not.toBe(null);
            expect(ul.getDOMNode().children.length).toBe(1);
        });
    });
});
