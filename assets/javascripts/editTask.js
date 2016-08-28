function toggleForms(selectedTask) {
  $(selectedTask).find('.task-head').toggleClass('hide');
  $(selectedTask).find('.task-body').toggleClass('hide');
  $(selectedTask).find('.edit-task').toggleClass('hide');
  $(selectedTask).find('.edit-name').toggleClass('hide');
  $(selectedTask).find('.edit-desc').toggleClass('hide');
  $(selectedTask).find('.save-edit').toggleClass('hide');
}

function prefillInputs(selectedTask) {
  let oldName = $(selectedTask).find('.task-head').text();
  let oldDesc = $(selectedTask).find('.task-body').text();
  $(selectedTask).find('.edit-name').val(oldName);
  $(selectedTask).find('.edit-desc').val(oldDesc);
}

function updateTask(updatedTask) {
  let newName = $(updatedTask).find('.edit-name').val();
  let newDesc = $(updatedTask).find('.edit-desc').val();
  $(updatedTask).find('.task-head').text(newName);
  $(updatedTask).find('.task-body').text(newDesc);
  toggleForms(updatedTask);
  saveTask(updatedTask, [newName, newDesc]);
}
function saveTask(updatedTask, taskData) {
  let key = $(updatedTask).closest('.task-container').attr('id');
  localStorage.setItem(key, taskData);
}
