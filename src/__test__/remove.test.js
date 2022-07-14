import { deleteTask } from '../crud-methods.js';

const todoArray = [
  {
    description: 'Solve mock test',
    completed: true,
    index: 1,
  },
  {
    description: 'Solve mock test',
    completed: false,
    index: 2,
  },
  {
    description: 'Solve mock test',
    completed: false,
    index: 3,
  },
];
localStorage.setItem('todo', JSON.stringify(todoArray));
document.body.innerHTML = `
    <div id="to-dos">
      <div class="list-item" id="remove"></div>
    </div>
`;

describe('remove item from the local storage', () => {
  const item = document.querySelector('#remove');
  let listItem = document.querySelectorAll('#to-dos .list-item');
  const length = listItem.length - 1;
  deleteTask(item);
  listItem = document.querySelectorAll('#to-dos .list-item');
  const data = JSON.parse(localStorage.getItem('todo'));
  test('test remove function', () => {
    expect(listItem).toHaveLength(length);
  });

  test('check if local storage is deleting the item', () => {
    expect(data).toHaveLength(2);
  });
});