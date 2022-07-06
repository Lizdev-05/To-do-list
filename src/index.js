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
  const todo = document.createElement('div');
  todo.classList.add('todo');
  todo.innerHTML += `
  <input type="checkbox" class='checkbox'>
  <h2>${todoValue}</h2>
<i class="fa-solid fa-ellipsis-vertical"></i>
<i class="fa-solid fa-trash-can"></i>

  `;
  todoLists.appendChild(todo);
  
 const checkbox = document.querySelectorAll('.checkbox');
 checkbox.forEach(i =>{
   i.addEventListener('click', () => {
    i.parentElement.classList.toggle('toggle-container')
    i.nextElementSibling.classList.toggle('checkTodo')
    i.parentElement.lastElementChild.classList.toggle('trash-active')
    i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disable')
   })
 })

};

textInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault()
    addToDo(textInput.value);
    textInput.value = ''
  }

})


