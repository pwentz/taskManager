function fetchTasks() {
  Object.keys(localStorage).forEach((key) => {
    if (key !== 'tasks') {
      $('#tasks').append(
        taskHTML(localStorage.getItem(Number(key)))
      )
    }
  });
}

function taskHTML(t) {
  return `<div class='row'>
    <div class='small-8 small-centered columns task-container'>
     <p>${t}</p>
    </div>
   </div>`
}
