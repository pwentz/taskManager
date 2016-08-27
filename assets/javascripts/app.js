$(function(){ $(document).foundation(); });
$(document).ready( () => {
  verifyCount();
  verifyEmpty();

  $('.add-task').on('click', function() {
    localStorage.tasks = Number(localStorage.tasks) + 1;
    createTask($('#task-input').val(), localStorage.tasks)
  });
})

function verifyCount() {
  if (!localStorage.tasks) {
    localStorage.tasks = 0;
  }
}
function verifyEmpty() {
  if (localStorage.length > 1) {
    fetchTasks();
  }
}
