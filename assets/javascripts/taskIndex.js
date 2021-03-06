function fetchTasks() {
  Object.keys(localStorage).forEach((key) => {
    if (key !== 'tasks') {
      let rawTask = localStorage.getItem(Number(key))
      let name = rawTask.split(',')[0]
      let desc = rawTask.split(',')[1]
      $('#tasks').append(
        taskHTML(name, desc, key)
      )
    }
  });
}

function taskHTML(name, desc, key) {
  return `<div class='row'>
    <div id='${key}' class='small-8 small-centered columns task-container'>
     <div class='task-filler'>
      <i class='fi-check hide'></i>
      <i class='fi-x'></i>
      <input type='checkbox' class='completed'>
     </div>
     <input class='edit-name hide'>
     <h5 class='task-head'>${name}</h5>
     <textarea class='edit-desc hide'></textarea>
     <p class='task-body'>${desc}</p>
     <div class='row'>
      <div class='small-3 columns'>
       <button type='submit' class='warning button save-edit hide'>
         Save
       </button>
       <button type='submit' class='warning button edit-task'>
        Edit Task
       </button>
      </div>
      <div class='small-3 columns'>
       <button type='submit' class='alert button delete-task'>
        Delete Task
       </button>
      </div>
     </div>
    </div>
   </div>`
}
