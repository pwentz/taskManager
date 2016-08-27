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
