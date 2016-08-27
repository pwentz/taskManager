function createTask(newTask, taskId) {
  localStorage.setItem(taskId, newTask);
  $('#tasks').append(formatTask(newTask));
}

function formatTask(newTask) {
  return `<div class='row'>
    <div class='small-8 small-centered columns task-container'>
     <p>${newTask}</p>
    </div>
   </div>`
}
