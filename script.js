// Constants
const LOCAL_STORAGE_KEY = 'todoAppTasks';

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// State Management
let tasks = [];

// Load tasks from Local Storage
const loadTasks = () => {
    try {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!storedTasks) return [];

        const parsedTasks = JSON.parse(storedTasks);
        
        // Validate data structure
        if (!Array.isArray(parsedTasks)) return [];
        
        return parsedTasks.filter(task => 
            typeof task === 'object' &&
            task !== null &&
            'id' in task &&
            'description' in task &&
            'isCompleted' in task &&
            typeof task.id === 'number' &&
            typeof task.description === 'string' &&
            typeof task.isCompleted === 'boolean'
        );
    } catch (error) {
        console.error('Error loading tasks:', error);
        return [];
    }
};

// Save tasks to Local Storage
const saveTasks = (tasksToSave) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasksToSave));
    } catch (error) {
        console.error('Error saving tasks:', error);
    }
};

// Create task element
const createTaskElement = (task) => {
    const li = document.createElement('li');
    li.className = 'todo__item';
    li.dataset.taskId = task.id;
    if (task.isCompleted) {
        li.classList.add('todo__item--completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo__checkbox';
    checkbox.checked = task.isCompleted;

    const textSpan = document.createElement('span');
    textSpan.className = 'todo__text';
    textSpan.textContent = task.description;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'todo__button todo__button--delete';
    deleteButton.textContent = 'Delete';

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteButton);

    return li;
};

// Render single task
const renderTask = (task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
};

// Render all tasks
const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach(renderTask);
};

// Add new task
const addTask = (description) => {
    const trimmedDescription = description.trim();
    if (!trimmedDescription) return;

    const newTask = {
        id: Date.now(),
        description: trimmedDescription,
        isCompleted: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTask(newTask);
    taskInput.value = '';
};

// Toggle task completion
const toggleTaskComplete = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    task.isCompleted = !task.isCompleted;
    saveTasks(tasks);

    const taskElement = taskList.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.classList.toggle('todo__item--completed');
    }
};

// Delete task
const deleteTask = (taskId) => {
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasks(tasks);

    const taskElement = taskList.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.remove();
    }
};

// Event Handlers
const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput.value);
};

const handleTaskListClick = (e) => {
    const taskItem = e.target.closest('.todo__item');
    if (!taskItem) return;

    const taskId = Number(taskItem.dataset.taskId);

    if (e.target.matches('.todo__checkbox')) {
        toggleTaskComplete(taskId);
    } else if (e.target.matches('.todo__button--delete')) {
        deleteTask(taskId);
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    tasks = loadTasks();
    renderTasks();

    // Event Listeners
    taskForm.addEventListener('submit', handleSubmit);
    taskList.addEventListener('click', handleTaskListClick);
});
