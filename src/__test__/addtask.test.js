document.body.innerHTML = `
    <div id="to-dos">
      <div class="list-item" id="remove"></div>
    </div>
`;

const toDoList = document.getElementById('to-dos');
const addTask = (taskValue) => {
  const taskContainer = document.createElement('div');
  taskContainer.className = 'list-item';
  taskContainer.innerHTML += `
    <input type="checkbox" class="checkbox">
    <span>${taskValue}</span>
    <i class="fas fa-ellipsis-vertical"></i>
    <i class="fas fa-trash-can"></i>
  `;
  toDoList.appendChild(taskContainer);
};

describe('to check if the add function works', () => {
  test('addtask', () => {
    addTask('Go for a walk');
    addTask('cook dinner');
    const listItem = document.querySelectorAll('#to-dos .list-item');
    expect(listItem.length).toBe(3);
  });
});
