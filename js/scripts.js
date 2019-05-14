function sendTask(form){
    let taskText = form.task.value;
    let dateText = form.date.value;
    let tasks = document.getElementById("taskTable");
    let row = tasks.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML= taskText;
    cell2.innerHTML = dateText;
    cell3.innerHTML = '<i class="fas fa-times" onclick="removeTask(this)"></i>';
    return false;
}

function removeTask(task){
    task.parentNode.parentNode.parentNode.removeChild(task.parentNode.parentNode);
}