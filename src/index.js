/* eslint-disable */
import _ from 'lodash';
import './style.css';

const toDoArray = [
  {
    toDo: 'Learn React',
    status: 'false',
    index: 0,
  },

  {
    toDo: 'Complete web pack task',
    status: 'completed',
    index: 1,
  },

  {
    toDo: 'Update social media',
    status: 'false',
    index: 3,
  },

  {
    toDo: 'Visit family',
    status: 'false',
    index: 4,
  },

  {
    toDo: 'Have a meeting with HOP',
    status: 'completed',
    index: 5,
  },
];

const addStaticTodo = () => {
  const todoLists = document.querySelector('.todo-lists');
  for (let i = 0; i < toDoArray.length; i += 1) {
    const todo = document.createElement('li');
    todo.classList.add('todo');
    todo.innerHTML = `
     <div class="todo-content">
<input type="checkbox">
<h2>${toDoArray[i].toDo}</h2>
</div>
<div class="icon">
<i class="fa-solid fa-ellipsis-vertical"></i>
</div>
  `;
    todoLists.appendChild(todo);
  }
};

addStaticTodo();
