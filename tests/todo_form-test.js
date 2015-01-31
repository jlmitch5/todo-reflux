jest.dontMock('../application/javascript/src/todo_form.jsx');

describe('Todo Form', function () {
    var React = require('react/addons');
    var TestUtils = React.addons.TestUtils;
    
    jest.setMock('../application/javascript/src/todo_actions.js', {
        addItem: jest.genMockFn()
    });

    var TodoActions = require('../application/javascript/src/todo_actions.js');
    var TodoForm = require('../application/javascript/src/todo_form.jsx');

    var form;

    beforeEach(function () {
        form = TestUtils.renderIntoDocument(<TodoForm />);
    });
    
    it('renders without displaying a warning', function () {
        var tooltip = TestUtils.findRenderedDOMComponentWithClass(form, 'tooltip');

        expect(form.state.showWarning).toBe(false);
        expect(tooltip.props.className).not.toContain('show');
    });

    it('displays warning when submitting witout a Todo', function () {
        TestUtils.Simulate.submit(form.getDOMNode());

        var tooltip = TestUtils.findRenderedDOMComponentWithClass(form, 'tooltip');

        expect(form.state.showWarning).toBe(true);
        expect(tooltip.getDOMNode().textContent).toBe('please write something');
        expect(tooltip.props.className).toContain('show');
    });

    it('triggers #addItem action', function () {
        var input = TestUtils.findRenderedDOMComponentWithClass(form, 'input');
        
        input.getDOMNode().value = "Write a test";
    
        TestUtils.Simulate.submit(form.getDOMNode());

        expect(TodoActions.addItem).toBeCalled();
        expect(TodoActions.addItem).toBeCalledWith("Write a test");
        expect(input.getDOMNode().value).toBe('');
        expect(form.state.showWarning).toBe(false);
    });
});

