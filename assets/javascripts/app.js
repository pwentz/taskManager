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
    if (confirm('Are you sure?')) {
      localStorage.clear();
      hideTasks();
    }
  })
}

function editTask() {
  $('#tasks').on('click', '.edit-task', () => {
    let taskToEdit = event.target.closest('.task-container');
    toggleForms(taskToEdit);
    prefillInputs(taskToEdit);
  });
}

function saveEdit() {
  $('#tasks').on('click', '.save-edit', () => {
    let updatedTask = event.target.closest('.task-container');
    updateTask(updatedTask);
  });
}

function deleteTask() {
  $('#tasks').on('click', '.delete-task', () => {
    let chosenTask = event.target.closest('.task-container');
    destroyTask(chosenTask);
  })
}

function completeTask() {
  $('#tasks').on('click', '.completed', () => {
    let chosenTask = event.target.closest('.task-container');
    markAsComplete(chosenTask);
  })
}
