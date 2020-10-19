// Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

// Functions

function addToDo(event) {
	// prevent form from submitting
	event.preventDefault();

	if (toDoInput.value !== '') {
		// toDo Div

		const toDoDiv = document.createElement('div');
		toDoDiv.classList.add('todo');

		// Create Li
		const newToDo = document.createElement('li');
		newToDo.innerText = toDoInput.value;
		newToDo.classList.add('todo-item');
		toDoDiv.appendChild(newToDo);

		// add to local stroage
		saveLocalTodos(toDoInput.value);

		// Check Mark Button
		const completedButton = document.createElement('button');
		completedButton.innerHTML = '<i class="fas fa-check"></i>';
		completedButton.classList.add('complete-btn');
		toDoDiv.appendChild(completedButton);

		// Check Trash Button
		const trashButton = document.createElement('button');
		trashButton.innerHTML = '<i class="fas fa-trash"></i>';
		trashButton.classList.add('trash-btn');
		toDoDiv.appendChild(trashButton);

		// Append to List
		toDoList.appendChild(toDoDiv);

		// clear the input
		toDoInput.value = '';
	}
}

function deleteCheck(e) {
	const item = e.target;
	// delete todo
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		removeLocalTodos(todo);
		todo.addEventListener('transitionend', function() {
			todo.remove();
		});
	}

	// check mark
	if (item.classList[0] === 'complete-btn') item.parentElement.classList.add('complete');
}

// filter select
function filterToDo(e) {
	const todos = toDoList.childNodes;
	todos.forEach((cur) => {
		switch (e.target.value) {
			case 'all':
				cur.style.display = 'flex';
				break;
			case 'completed':
				if (cur.classList.contains('complete')) {
					cur.style.display = 'flex';
				} else {
					cur.style.display = 'none';
				}
				break;
			case 'uncompleted':
				if (!cur.classList.contains('complete')) {
					cur.style.display = 'flex';
				} else {
					cur.style.display = 'none';
				}
		}
	});
}

// saving the todo list to local storage

function saveLocalTodos(todo) {
	// check if i already have todos there
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

// showing the saved todos from the localstrorage to the ui
function getTodos() {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	todos.forEach((todo) => {
		const toDoDiv = document.createElement('div');
		toDoDiv.classList.add('todo');

		// Create Li
		const newToDo = document.createElement('li');
		newToDo.innerText = todo;
		newToDo.classList.add('todo-item');
		toDoDiv.appendChild(newToDo);

		// Check Mark Button
		const completedButton = document.createElement('button');
		completedButton.innerHTML = '<i class="fas fa-check"></i>';
		completedButton.classList.add('complete-btn');
		toDoDiv.appendChild(completedButton);

		// Check Trash Button
		const trashButton = document.createElement('button');
		trashButton.innerHTML = '<i class="fas fa-trash"></i>';
		trashButton.classList.add('trash-btn');
		toDoDiv.appendChild(trashButton);

		// Append to List
		toDoList.appendChild(toDoDiv);
	});
}

function removeLocalTodos(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}

	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}
