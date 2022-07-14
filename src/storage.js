const setStorage = (task) => {
  localStorage.setItem('todo', JSON.stringify(task));
};

export default setStorage;
