// a
const todoContainer = document.createElement('div');
todoContainer.id = 'todoContainer';
const inputContainer = document.createElement('div');
inputContainer.id = 'inputContainer';
const todoInput = document.createElement('input');
todoInput.type = 'text';
todoInput.id = 'todoInput';
const addTodoButton = document.createElement('button');
addTodoButton.id = 'addTodoButton';
addTodoButton.textContent = 'Add';
const todoList = document.createElement('div');
todoList.id = 'todoList';

// Массив для хранения задач
const todos = [
    {
        id: "1",
        title: "Buy milk :)",
        isDone: false,
        time: "18:44"
    },
    {
        id: "2",
        title: "End the project",
        isDone: false,
        time: "18:44"
    },
    {
        id: "3",
        title: "Call mom",
        isDone: false,
        time: "18:44"
    },
    {
        id: "4",
        title: "Sleep 10 hrs",
        isDone: false,
        time: "18:44"
    }
];

// d
const createTodoItem = (text, time) => {
    const todoItem = document.createElement('div');
    todoItem.className = 'todoItem';

    const taskText = document.createElement('span');
    taskText.textContent = text;

    const taskTime = document.createElement('span');
    taskTime.className = 'time';
    taskTime.textContent = time;

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'X';
    removeButton.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(taskText);
    todoItem.appendChild(taskTime);
    todoItem.appendChild(removeButton);

    return todoItem;
};

todos.forEach(task => {
    const todoItem = createTodoItem(task.title, task.time);
    todoList.appendChild(todoItem);
});

// b
todoContainer.appendChild(inputContainer);
todoContainer.appendChild(todoList);
document.body.appendChild(todoContainer);
inputContainer.appendChild(todoInput);
inputContainer.appendChild(addTodoButton);

// Добавляем новую задачу при нажатии на кнопку
addTodoButton.addEventListener('click', () => {
    const text = todoInput.value;
    if (text) {
        const time = new Date().toLocaleTimeString().slice(0, 5);
        const newTodo = {
            id: (todos.length + 1).toString(),
            title: text,
            time: time,
            isDone: false,
            
        };
        todos.push(newTodo);
        const todoItem = createTodoItem(text, time);
        todoList.appendChild(todoItem);
        console.log(newTodo); 
        todoInput.value = ''; 
    }
});
