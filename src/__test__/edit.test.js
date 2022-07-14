const editTask = (taskContainer, task) => {
  const editText = document.createElement('input');
  editText.type = 'text';
  editText.className = 'editText';
  editText.value = task.textContent;
  taskContainer.replaceChild(editText, task);
  editText.value = 'new task';
  taskContainer.replaceChild(task, editText);
  task.textContent = editText.value;
};

test('test edit function', () => {
  document.body.innerHTML = `
    <div id="to-dos">
      <div class="list-item" id="edit"><span></span></div>
    </div>
  `;
  const item = document.querySelector('#edit');
  const text = document.querySelector('#edit span');
  const newTask = 'new task';
  editTask(item, text);
  expect(text.innerHTML).toBe(newTask);
});