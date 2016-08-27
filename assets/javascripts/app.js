$(function(){ $(document).foundation(); });
$(document).ready( () => {
  verifyCount();
  verifyEmpty();

  $('.add-task').on('click', () => {
    let name = $('#task-name').val();
    let description = $('#task-description').val();
    localStorage.tasks = Number(localStorage.tasks) + 1;
    createTask([name, description], localStorage.tasks)
    clearInput();
  });

  $('.delete-all').on('click', () => {
    localStorage.clear();
    hideTasks();
  })

  $('.edit-task').on('click', () => {
    let taskToEdit = event.target.closest('.row')
    editTask(taskToEdit)
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
function clearInput() {
  $('#task-name').val('')
  $('#task-description').val('')
}
