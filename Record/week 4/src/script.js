// 1. Select DOM elements
const themeToggle = document.getElementById('theme-toggle');
const clockElement = document.getElementById('clock');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// 2. Dynamic Real-Time Clock
function updateClock() {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
}
// Run clock immediately and refresh every 1 second
updateClock();
setInterval(updateClock, 1000);

// 3. Dynamic Styling (Dark Mode Toggle)
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 4. Dynamic Content Creation (Add Tasks)
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new <li> element dynamically
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.backgroundColor = '#ff4d4d';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    
    // Add click event to remove the element when clicked
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append button to the list item, and list item to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
}

// Trigger action on button click
addTaskBtn.addEventListener('click', addTask);

// Trigger action when pressing "Enter" key inside the input
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
