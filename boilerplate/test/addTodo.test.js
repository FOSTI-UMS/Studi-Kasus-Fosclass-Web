const {AddTodo} = require('../controllers/Todo');

test('add todo makan minum', () => {
  expect(AddTodo('makan minum')).toBe(true);
});

test('add todo makan minum', () => {
    expect(AddTodo(false)).toBe(false);
});