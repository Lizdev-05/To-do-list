/* eslint-disable */
import _, { remove } from 'lodash';
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
  checkbox.forEach(i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container')
      i.nextElementSibling.classList.toggle('checkTodo')
      i.parentElement.lastElementChild.classList.toggle('trash-active')
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disable')
      updateLocal();
    })
  })
  // Setting item to local storage
  const object = new myObject(todoValue, false, checkbox.length);
  toDoArray.push(object);
  localStorage.setItem('list', JSON.stringify(toDoArray));
  // Calling edit to do function
  const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
  editIcons.forEach(i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.add('checked-container')
      editTodo(todo, i.previousElementSibling);
    })
  })
  // Calling removeIcon function
  const removeIcons = document.querySelectorAll('.fa-trash-can');
  removeIcons.forEach(i => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    })
  })
};

const removeTodo = (todos) => {
  todoLists.removeChild(todos)
  let count = 0;
  const localData = JSON.parse(localStorage.getItem('list'))
  const data = Array.from(localData).filter(i => i.completed === false);
  data.map(i => i.index = count += 1);
  localStorage.setItem('list', JSON.stringify(data));
}

//Declaring the Edit todo
const editTodo = (todo, todos) => {
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'editInput';
  editInput.value = todos.textContent;
  todo.replaceChild(editInput, todos);
  editInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const todoContainers = document.querySelectorAll('.todo');
      const localData = JSON.parse(localStorage.getItem('list'));
      for (let i = 0; i < todoContainers.length; i += 1) {
        if (todoContainers[i].classList.contains('checked-container')) {
          localData[i].description = editInput.value;
          localStorage.setItem('list', JSON.stringify(localData));
        }

      }
      editInput.parentElement.classList.remove('checked-container');
      todo.replaceChild(todos, editInput);
      todos.textContent = editInput.value;
    }


  })
}
textInput.addEventListener('keypress', e => {
  if (e.key === 'Enter' && textInput.value) {
    addToDo(textInput.value);
    textInput.value = ''
  }

})


// Get item from local storage

const getFromLocal = () => {
  const data = JSON.parse(localStorage.getItem('list'))
  data.map(i => {
    toDoArray.push(i);
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML += `
  <input type="checkbox" class='checkbox'>
  <span>${i.description}</span>
<i class="fa-solid fa-ellipsis-vertical"></i>
<i class="fa-solid fa-trash-can"></i>

  `;
    todoLists.appendChild(todo);

    const editIcons = document.querySelectorAll('.fa-ellipsis-vertical');
    editIcons.forEach(i => {
      i.addEventListener('click', () => {
        editTodo(todo, i.previousElementSibling);
        i.parentElement.classList.add('checked-container')
      })
    })
  })
  const checkbox = document.querySelectorAll('.checkbox');
  checkbox.forEach(i => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checked-container')
      i.nextElementSibling.classList.toggle('checkTodo')
      i.parentElement.lastElementChild.classList.toggle('trash-active')
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disable')
      updateLocal();
    })
  })

  const removeIcons = document.querySelectorAll('.fa-trash-can');
  removeIcons.forEach(i => {
    i.addEventListener('click', () => {
      removeTodo(i.parentElement);
    })
  })

  localStorage.setItem('list', JSON.stringify(toDoArray))
}

window.addEventListener('load', getFromLocal);

const updateLocal = () =>{
  const localData = JSON.parse(localStorage.getItem('list'));
  const todos = document.querySelectorAll('span')
  for(let i = 0; i < localData.length; i += 1){
        if(todos[i].classList.contains('checkTodo')){
         
      localData[i].completed = true;
     
    } else {
      localData[i].completed = false;
    }
    console.log(localData[i].completed)
  }
  localStorage.setItem('list', JSON.stringify(localData));

}



