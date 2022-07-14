// webhint dissalble
import './style.css';
import { addTask } from './crud-methods.js';
import { clearAll } from './clear.js';

const inputBtn = document.getElementById('text-input');
const clearBtn = document.getElementById('clear-button');

inputBtn.addEventListener('keypress', (i) => {
  if (i.key === 'Enter' && inputBtn.value) {
    addTask(inputBtn.value);
    inputBtn.value = null;
  }
});

clearBtn.addEventListener('click', () => {
  clearAll();
});
