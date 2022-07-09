/* eslint-disable */
import './style.css';
import { addTask } from './crud-methods.js';

const inputBtn = document.getElementById('text-input');

inputBtn.addEventListener('keyup', (i) => {
  if (i.key === 'Enter' && inputBtn.value) {
    addTask(inputBtn.value);
    inputBtn.value = null;
  }
});