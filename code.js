function addTaskBox(title, time) {
    var newTaskBox = document.createElement('div');
    newTaskBox.className = 'task-box';

    var taskDesc = document.createElement('p');
    taskDesc.textContent = title;
    newTaskBox.appendChild(taskDesc);

    var timeslot = document.createElement('p');
    timeslot.className = 'timeslot';
    timeslot.textContent = time;
    newTaskBox.appendChild(timeslot);

    // This creates an "Edit" button within the task textbox
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() {
        editTask(title, time, taskDesc, timeslot);
    };
    newTaskBox.appendChild(editButton);

    var assignBoxes = document.querySelector('.assign-boxes');
    assignBoxes.appendChild(newTaskBox);

    // This moves the "Create New Task" button to the bottom of the list after every new task box is added
    var createTaskButton = document.getElementById('create-task-button');
    assignBoxes.appendChild(createTaskButton);
}

// This is a function to allow users to edit any task
function editTask(oldTitle, oldTime, taskDescElement, timeslotElement) {
    var newTitle = prompt("Enter new task name:", oldTitle);
    var newTime = prompt("Enter new task time:", oldTime);

    if (newTitle !== null && newTime !== null) {
        // Update task details
        taskDescElement.textContent = newTitle;
        timeslotElement.textContent = newTime;
    }
}

// This creates a new task using the "Create New Task" button
function createNewTask() {
    var title = prompt("Enter task name:");
    var time = prompt("Enter task time:");
    
    if (title && time) {
        addTaskBox(title, time);
    } else {
        alert("Task name and time are required.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var createTaskButton = document.getElementById('create-task-button');
    createTaskButton.addEventListener('click', createNewTask);

    // Add "Edit" button functionality to existing task boxes
    var editButtons = document.querySelectorAll('.edit-button');
    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var taskBox = button.parentElement;
            var taskDesc = taskBox.querySelector('p:not(.timeslot)');
            var timeslot = taskBox.querySelector('.timeslot');
            editTask(taskDesc.textContent, timeslot.textContent, taskDesc, timeslot);
        });
    });
});

// Add "Edit" button functionality to new task boxes
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('edit-button')) {
        var taskBox = event.target.parentElement;
        var taskDesc = taskBox.querySelector('p:not(.timeslot)');
        var timeslot = taskBox.querySelector('.timeslot');
        editTask(taskDesc.textContent, timeslot.textContent, taskDesc, timeslot);
    }
});
