// Function to add a new homework box element
function addHomeworkBox(title, time) {
    // Create a new homework box div
    var newHomeworkBox = document.createElement('div');
    newHomeworkBox.className = 'homework-box';

    // Create a paragraph element for the title
    var titlePara = document.createElement('p');
    titlePara.textContent = title;
    newHomeworkBox.appendChild(titlePara);

    // Create a paragraph element for the timeslot
    var timePara = document.createElement('p');
    timePara.className = 'timeslot';
    timePara.textContent = time;
    newHomeworkBox.appendChild(timePara);

    // Append the new homework box to the assign-boxes div
    var assignBoxes = document.querySelector('.assign-boxes');
    assignBoxes.appendChild(newHomeworkBox);
}

// Function to handle the creation of a new task
function createNewTask() {
    var title = prompt("Enter task name:");
    var time = prompt("Enter task time:");
    
    if (title && time) {
        addHomeworkBox(title, time);
    } else {
        alert("Task name and time are required.");
    }
}

// Add event listener to the "Create new task" box
document.addEventListener('DOMContentLoaded', function () {
    var createTaskBox = document.getElementById('create-task-box');
    createTaskBox.addEventListener('click', createNewTask);
});
