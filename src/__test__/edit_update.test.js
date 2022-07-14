import { updateStorage } from '../crud-methods.js';
import { clearAll } from '../clear.js';

describe('set item to local storage and clear all items', () => {
  test('test update storage function', () => {
    const todoArray = [
      {
        description: 'List item 1',
        completed: true,
        index: 1,
      },
      {
        description: 'List item 2',
        completed: false,
        index: 2,
      },
      {
        description: 'List item 3',
        completed: true,
        index: 3,
      },
    ];
    localStorage.setItem('todo', JSON.stringify(todoArray));
    const item = document.querySelector('#remove');
    updateStorage(item);
    const data = JSON.parse(localStorage.getItem('todo'));
    expect(data).toHaveLength(3);
  });

  test('clear all items', () => {
    clearAll();
    const data = JSON.parse(localStorage.getItem('todo'));
    expect(data).toHaveLength(1);
  });

  test('use mock storage to mock local storage update', () => {
    const data = JSON.parse(localStorage.getItem('todo'));
    expect(data).toHaveLength(1);
  });

  test('mock html to check DOM manipulation', () => {
    document.body.innerHTML = `
      <div id="to-dos">
        <div class="list-item" id="remove"></div>
      </div>
    `;
    const item = document.querySelector('#remove');
    updateStorage(item);
    const data = JSON.parse(localStorage.getItem('todo'));
    expect(data).toHaveLength(1);
  });
});