// 1. DOM Element Selection
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Helper function to toggle empty state message
function updateEmptyState() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// Function to create and append a new task item
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task before adding.");
        return;
    }

    // 2. Dynamic Element Creation
    const li = document.createElement("li");
    li.className = "task-item";

    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-group";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    // 3. Event Listener for Complete button
    completeBtn.addEventListener("click", function () {
        textSpan.classList.toggle("completed");
    });

    // Event Listener for Delete button
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateEmptyState();
    });

    // 4. Construct the DOM tree
    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(textSpan);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();

    updateEmptyState();
}

// 5. Add Task button event
addBtn.addEventListener("click", addTask);

// Allow adding task using Enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }
});

// Initial empty state
updateEmptyState();