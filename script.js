// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create "Edit" button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () { editTask(li); };

    // Create "Delete" button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () { li.remove(); };

    // Append buttons to list item
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append list item to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Function to edit a task
function editTask(taskItem) {
    let newText = prompt("Edit your task:", taskItem.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskItem.firstChild.textContent = newText;
    }
}
