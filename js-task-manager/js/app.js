document.addEventListener("DOMContentLoaded", () => {
    tasks = loadTasksFromStorage();
    showtask();
});
/////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("taskForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("taskInput");
    const desc = input.value.trim();
    if (desc !== "") {
        addTask(desc);
        saveTasksToStorage(tasks);
        showtask();
        input.value = "";
    }
});

/////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("clearAll").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all tasks?")) {
        clearAllTasks();
        saveTasksToStorage(tasks);
        showtask();
    }
});

/////////////////////////////////////////////////////////////////////////////////////////

function showtask() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
        li.innerHTML = `
      <span>${task.description}</span>
      <div>
        <button onclick="changeState(${task.id})">${task.completed ? "Undo" : "Done"}</button>
        <button onclick="removeTask(${task.id})">Delete</button>
      </div>
    `;
        list.appendChild(li);
    });

    const stats = getStats();
    document.getElementById("totalCount").textContent = stats.total;
    document.getElementById("completedCount").textContent = stats.completed;
    document.getElementById("remainingCount").textContent = stats.remaining;
}

/////////////////////////////////////////////////////////////////////////////////////////

function changeState(id) {
    completed(id);
    saveTasksToStorage(tasks);
    showtask();
}

/////////////////////////////////////////////////////////////////////////////////////////

function removeTask(id) {
    deleteTask(id);
    saveTasksToStorage(tasks);
    showtask();
}


