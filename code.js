// Function to add a new task box
function addTaskBox(title, time) {
    var newTaskBox = document.createElement('div');
    newTaskBox.className = 'task-box';

    var taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    var taskTitle = document.createElement('p');
    taskTitle.className = 'task-title';
    taskTitle.textContent = title;
    taskContent.appendChild(taskTitle);

    var timeslot = document.createElement('p');
    timeslot.className = 'timeslot';
    timeslot.textContent = time;
    taskContent.appendChild(timeslot);

    newTaskBox.appendChild(taskContent);

    // This creates an "Edit" button within the task textbox
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
        editTask(title, time, taskTitle, timeslot);
    };
    newTaskBox.appendChild(editButton);

    // This creates a "Delete" button outside the task box
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        deleteTaskBox(newTaskBox);
    };
    newTaskBox.appendChild(deleteButton);

    var assignBoxes = document.querySelector('.assign-boxes');
    assignBoxes.appendChild(newTaskBox);

    // Adjust the left position of the delete button after a short delay
    setTimeout(function() {
        positionDeleteButton(deleteButton);
    }, 100);
}

// Function to adjust the left position of the "Delete" button
function positionDeleteButton(deleteButton) {
    var taskBox = deleteButton.parentElement;
    var deleteButtonWidth = deleteButton.offsetWidth;
    var taskBoxWidth = taskBox.offsetWidth;
    deleteButton.style.left = (taskBoxWidth - deleteButtonWidth) / 2 + 'px';
}

// Function to delete a task box
function deleteTaskBox(taskBox) {
    taskBox.remove();
}

// Function to edit an existing task
function editTask(oldTitle, oldTime, taskTitleElement, timeslotElement) {
    var newTitle = prompt("Enter new task name:", oldTitle);
    var newTime = prompt("Enter new task time:", oldTime);

    if (newTitle !== null && newTime !== null) {
        // Update task details
        taskTitleElement.textContent = newTitle;
        timeslotElement.textContent = newTime;
    }
}

// Function to create a new task using the "Create New Task" button
function createNewTask() {
    var title = prompt("Enter task name:");
    var time = prompt("Enter task time:");
    
    if (title && time) {
        addTaskBox(title, time);
    } else {
        alert("Task name and time are required.");
    }
}

// Event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // This adds the "Edit" button functionality to EXISTING task boxes
    var editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var taskBox = button.parentElement;
            var taskContent = taskBox.querySelector('.task-content');
            var taskTitle = taskContent.querySelector('.task-title');
            var timeslot = taskContent.querySelector('.timeslot');
            editTask(taskTitle.textContent, timeslot.textContent, taskTitle, timeslot);
        });
    });

    var createTaskButton = document.getElementById('create-task-button');
    createTaskButton.addEventListener('click', createNewTask);

    // This adds the "Delete" button functionality to EXISTING task boxes
    var deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var taskBox = button.parentElement;
            deleteTaskBox(taskBox);
        });
    });
});

// This adds the "Edit" button functionality to NEWLY CREATED task boxes
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('edit-button')) {
        var taskBox = event.target.parentElement;
        var taskContent = taskBox.querySelector('.task-content');
        var taskTitle = taskContent.querySelector('.task-title');
        var timeslot = taskContent.querySelector('.timeslot');
        editTask(taskTitle.textContent, timeslot.textContent, taskTitle, timeslot);
    }
});
