let tasks = [];         //here i create empty list to add tasks inside it
let count = 0           //counter to be the id of task 


/////////////////////////////////////
function counter() {
    count++
    return count
}

/////////////////////////////////////
function addTask(description) {
    const task = {
        id: counter(),
        description,
        completed: false
    };
    tasks.push(task);
    return task;
}

/////////////////////////////////////
function deleteTask(id) {
    tasks = tasks.filter(d => d.id !== id);
}

/////////////////////////////////////
function completed(id) {
    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
    });
}
/////////////////////////////////////
function getStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;
    return { total, completed, remaining };
}

/////////////////////////////////////
function getTasks() {
    return tasks;
}

/////////////////////////////////////
function clearAllTasks() {
    tasks = [];
}


//////////////////////////////////////////////////////////////////////////
