function createTask(newTask, taskId) {
  let name = newTask[0];
  let desc = newTask[1];
  localStorage.setItem(taskId, newTask);
  $('#tasks').prepend(formatTask(name, desc, taskId));
}

function formatTask(name, desc, key) {
  return `<div id='${key}' class='row'>
    <div class='small-8 small-centered columns task-container'>
     <div class='task-filler'>
     </div>
     <h5 class='task-head'>${name}</h5>
     <p class='task-body'>${desc}</p>
     <div class='small-3 columns'>
      <button type='submit' class='warning button edit-task'>
       Edit Task
      </button>
     </div>
    </div>
   </div>`
}
