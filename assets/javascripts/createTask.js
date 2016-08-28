function createTask(newTask, taskId) {
  let name = newTask[0];
  let desc = newTask[1];
  localStorage.setItem(taskId, newTask);
  $('#tasks').prepend(taskHTML(name, desc, taskId));
}
