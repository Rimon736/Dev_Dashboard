var buttons = document.getElementsByClassName("complete-btn");
var taskCount = 0;
var taskAssigned=5;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        taskCount++; 
        this.disabled = true;
        this.style.backgroundColor = "gray";
        taskAssigned--;
        var taskCompleted = document.getElementById("completed-task");
        var convertedCompleteTask = parseInt(taskCompleted.innerText);
        convertedCompleteTask++; // Increment the value
        taskCompleted.innerText = convertedCompleteTask; // Update the UI
        console.log(convertedCompleteTask);
        console.log(taskCount);
    });
}