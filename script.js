// Get HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// Function to save tasks into Local Storage
function saveTasks(){
    const tasks = [];

    // Get all tasks from task list
    taskList.querySelectorAll("li").forEach(function(task) {
        const span = task.querySelector("span");
        const checkbox = task.querySelector("input[type='checkbox']");

        // Get task information
        const taskData = {
            text: span.textContent,
            completed: checkbox.checked
        };

        // Add task information into the array
        tasks.push(taskData);
    });

    // Save tasks into Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Search and filter tasks
function filterTasks() {
    const searchText = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;

    taskList.querySelectorAll("li").forEach(function(task) {
        const taskText = task.querySelector("span").textContent.toLowerCase();
        const isCompleted = task.classList.contains("completed");

        // Check whether task matches search text
        const matchesSearch = taskText.includes(searchText);

        // Check whether task matches selected filter
        let matchesFilter = true;

        if (activeFilter === "active") {
            matchesFilter = !isCompleted;
        }

        if (activeFilter === "completed") {
            matchesFilter = isCompleted;
        }

        // Display or hide task
        if (matchesSearch && matchesFilter) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
}

// Listen for search input
searchInput.addEventListener("input", filterTasks);

// Listen for filter button clicks
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Highlight selected filter button
        button.classList.add("active");

        // Apply selected filter
        filterTasks();
    });
});

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Check whether input is empty
    if (taskText === "") {
        console.log("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create checkbox for a new task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.type = "button";
    editBtn.classList.add("edit-btn");

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.type = "button";

    // Add checkbox, text & delete button into the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Add new task into the task list
    taskList.appendChild(li);

    // Save tasks into Local Storage
    saveTasks();

    // Clear input field
    taskInput.value = "";
}

// Listen for Add button clicks
addTaskBtn.addEventListener("click", addTask);

// Listen for Delete button clicks
taskList.addEventListener("click", function(event) {
    const task = event.target.closest("li");

    if(!task)
        return;

    // Delete task
    if (event.target.tagName === "BUTTON" && event.target.textContent === "Delete") {
        task.remove();

        // Save after deleting a task
        saveTasks();
    }

    // Complete task
    if (event.target.type == "checkbox"){
        task.classList.toggle("completed");
        
        // Save after completing or uncompleting a task
        saveTasks();
        filterTasks();
    }

    // Edit task
    if(event.target.classList.contains("edit-btn")){
        const span = task.querySelector("span");

        // Get current task text
        const currentText = span.textContent;

        // Store original text for Cancel functionality
        task.dataset.originalText = currentText;

        // Create input field
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentText;

        // Create Save button
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.type = "button";
        saveBtn.classList.add("save-btn");

        // Create Cancel button
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";
        cancelBtn.type = "button";
        cancelBtn.classList.add("cancel-btn");

        // Replace task text with input field
        span.replaceWith(editInput);

        // Hide Edit button
        event.target.style.display = "none";

        // Insert Save and Cancel buttons
        task.insertBefore(saveBtn, event.target);
        task.insertBefore(cancelBtn, event.target);
    }

    // Update edited task
    if (event.target.textContent === "Save") {
        const editInput = task.querySelector("input[type='text']");
        const newText = editInput.value.trim();

        // Check whether edited text is empty
        if (newText === "") {
            console.log("Task cannot be empty!");
            return;
        }

        // Create updated task text
        const span = document.createElement("span");
        span.textContent = newText;

        // Replace input field with updated text
        editInput.replaceWith(span);

        // Save after editing a task
        saveTasks();

        // Refresh search and filter results
        filterTasks();

        // Remove Save and Cancel buttons
        task.querySelectorAll("button").forEach(function(button) {
            if (button.textContent === "Save" || button.textContent === "Cancel") {
                button.remove();
            }
        });

        // Show Edit button again
        task.querySelector(".edit-btn").style.display = "";
    }

    // Cancel editing
    if (event.target.textContent === "Cancel") {
        const editInput = task.querySelector("input[type='text']");
        const originalText = task.dataset.originalText;

        const span = document.createElement("span");
        span.textContent = originalText;

        editInput.replaceWith(span);

        // Remove Save and Cancel buttons
        task.querySelectorAll("button").forEach(function(button) {
            if (button.textContent === "Save" || button.textContent === "Cancel") {
                button.remove();
            }
        });

        // Show Edit button again
        task.querySelector(".edit-btn").style.display = "";
    }

});

// Load tasks from Local Storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    // Check whether saved tasks exist
    if (savedTasks == null) {
        saveTasks();
        return;
    }

    // Convert JSON text back into a JavaScript array
    const tasks = JSON.parse(savedTasks);

    // Clear existing task list before loading
    taskList.innerHTML = "";

    // Recreate each save task
    tasks.forEach(function(taskData){
        // Create list item
        const li = document.createElement("li");

        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = taskData.completed;

        // Create task text
        const span = document.createElement("span");
        span.textContent = taskData.text;

        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.type = "button";
        editBtn.classList.add("edit-btn");

        // Create Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.type = "button";

        // Restore completed task styling
        if (taskData.completed) {
            li.classList.add("completed");
        }

        // Add elements into list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        // Add task into task list
        taskList.appendChild(li);

    });
}

// Load saved tasks when webpage opens
loadTasks();

// Apply search and filter after loading tasks
filterTasks();
