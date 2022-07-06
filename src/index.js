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
  <span>${todoValue}</span>
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
  // Setting item to local storage
 const object = new myObject(todoValue, false, checkbox.length - 1);
 toDoArray.push(object);
 localStorage.setItem('list', JSON.stringify(toDoArray));

const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
editIcons.forEach(i =>{
  i.addEventListener('click', () =>{
    editTodo(todo, i.previousElementSibling)
  })
})
};


const editTodo = (todo, todos) =>{
const editInput = document.createElement('input');
editInput.type = 'text';
editInput.className = 'editInput';
editInput.value = todos.textContent;
todo.replaceChild(editInput, todos);
editInput.addEventListener('keypress', e =>{
  if(e.key === 'Enter'){
    const todoContainers = document.querySelectorAll('.todo');
    const localData = JSON.parse(localStorage.getItem('list'));
    for(let i =0; i < todoContainers.length; i +=1 ){
       if(todoContainers[i].classList.contains('toggle-container')){
        localData[i].description = editInput.value;
        localStorage.setItem('list', JSON.stringify(localData));
       }
      
    }
    editInput.parentElement.classList.remove('toggle-container');
    todo.replaceChild(todos, editInput);
    todos.textContent = editInput.value;
  }

 
})
}
textInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault()
    addToDo(textInput.value);
    textInput.value = ''
  }

})


