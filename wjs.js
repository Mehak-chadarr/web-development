document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', () => {
      listItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = '';
  });
});