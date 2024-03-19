function addTaskBox(title, time) {
    
    var newTaskButton = document.createElement('div');
    newTaskButton.className = 'task-button';

    var taskDesc = document.createElement('p');
    taskDesc.textContent = title;
    newTaskButton.appendChild(taskDesc);

    var timeslot = document.createElement('p');
    timeslot.className = 'timeslot';
    timeslot.textContent = time;
    newTaskButton.appendChild(timeslot);

    var assignBoxes = document.querySelector('.assign-boxes');
    assignBoxes.appendChild(newTaskButton
);

    // this moves the "Create New Task" button to the bottom of the list
    var createTaskButton = document.getElementById('create-task-button');
    assignBoxes.appendChild(createTaskButton);
}

// Create a new task using the "Create New Task" button
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
});
