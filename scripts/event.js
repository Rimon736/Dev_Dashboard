var buttons = document.getElementsByClassName("complete-btn");
var taskCount = 0;
var taskAssigned = 6;


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        taskCount++; 
        this.disabled = true;
        this.style.backgroundColor = "gray";
        taskAssigned--;

        if(taskAssigned == 0){
            alert("Board Updated Successfully"+"\nTask Completed: " + taskCount + "\nTask Remaining: " + taskAssigned);
            alert("Congratulations! You have completed all the tasks");
        }
        else{
            alert("Board Updated Successfully"+"\nTask Completed: " + taskCount + "\nTask Remaining: " + taskAssigned);
        }

        var taskCompleted = document.getElementById("completed-task");
        var convertedCompleteTask = parseInt(taskCompleted.innerText);
        convertedCompleteTask++;
        taskCompleted.innerText = convertedCompleteTask;

        var taskRemaining = document.getElementById("remaining-task");
        var convertedRemainingTask= parseInt(taskRemaining.innerText);
        convertedRemainingTask--;
        taskRemaining.innerText = convertedRemainingTask;

        var cardTitle= this.closest(".col-span-1").getElementsByClassName("card-title")[0].innerText;
        var currTime= new Date().toLocaleString();
        var message= `you have completed the task "${cardTitle}" on ${currTime}.`;
        console.log(message);

        var log= document.createElement("p");
        log.innerText= message;
        
        var activityLog = document.getElementById("activity-log");
        activityLog.appendChild(log);

        var clearHistoryButton = document.getElementById("clear-history");
        clearHistoryButton.addEventListener("click", function() {
            var activityLog = document.getElementById("activity-log");
            activityLog.innerHTML = ""; 
        });
    });
}

function getCurrDate(){
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date= new Date();
    var day= Days[date.getDay()];
    var month= Months[date.getMonth()];
    var year= date.getFullYear();  

    var today= `${day}`;
    var currDate= `${date.getDate()} ${month}, ${year}`;

    return [today, currDate];
}
const [today, currDate] = getCurrDate();
document.getElementById("curr-day").innerText = today;
document.getElementById("curr-date").innerText = currDate;