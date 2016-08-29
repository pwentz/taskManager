$(function(){ $(document).foundation(); });
$(document).ready( () => {
  verifyCount();
  verifyEmpty();
  addTask();
  deleteAll();
  editTask();
  saveEdit();
  deleteTask();
  completeTask();
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

function addTask() {
  $('.add-task').on('click', () => {
    let name = $('#task-name').val();
    let description = $('#task-description').val();
    localStorage.tasks = Number(localStorage.tasks) + 1;
    createTask([name, description], localStorage.tasks)
    clearInput();
  });
}

function deleteAll() {
  $('.delete-all').on('click', () => {
    localStorage.clear();
    hideTasks();
  })
}

function editTask() {
  $('.edit-task').on('click', () => {
    let taskToEdit = event.target.closest('.task-container');
    toggleForms(taskToEdit);
    prefillInputs(taskToEdit);
  });
}

function saveEdit() {
  $('.save-edit').on('click', () => {
    let updatedTask = event.target.closest('.task-container');
    updateTask(updatedTask);
  });
}

function deleteTask() {
  $('.delete-task').on('click', () => {
    let chosenTask = event.target.closest('.task-container');
    destroyTask(chosenTask);
  })
}

function completeTask() {
  $('.completed').on('click', () => {
    let chosenTask = event.target.closest('.task-container');
    markAsComplete(chosenTask);
  })
}
