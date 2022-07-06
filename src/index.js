/* eslint-disable */
import _ from 'lodash';
import './style.css';

const textInput = document.querySelector('input');
const todoLists = document.querySelector('.todo-lists');
const clearBtn = document.querySelector('.clear-btn');

class myObject {
  constructor(description, completed, index) {
    this.description = description
      this.completed = completed
      this.index = index
  }
}

const toDoArray = [];

const addToDo = (todoValue) => {
  const todo = document.createElement('li');
  todo.classList.add('todo');
  todo.innerHTML = `
     <div class="todo-content">
  <input type="checkbox">
  <h2>${todoValue}</h2>
</div>
<div class="icon">
<i class="fa-solid fa-ellipsis-vertical"></i>
</div>
  `;
  todoLists.appendChild(todo);
};

textInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault()
    addToDo(textInput.value);
  }

})


