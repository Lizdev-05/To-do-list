import { updateStorage } from '../crud-methods.js';
import { clearAll } from '../clear.js';

describe('set item to local storage and clear all items', () => {
  test('test update storage function', () => {
    const todoArray = [
      {
        description: 'Solve mock test',
        completed: true,
        index: 1,
      },
      {
        description: 'Take enough rest',
        completed: false,
        index: 2,
      },
      {
        description: 'Add to do',
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