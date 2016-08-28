function destroyTask(task) {
  localStorage.removeItem($(task).attr('id'))
  $(task).addClass('hide')
}
