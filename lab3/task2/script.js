const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
  const text = input.value.trim();
  
  if (text === '') return; 

  const li = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️'; 
  deleteBtn.className = 'delete-btn';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  input.value = '';
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});