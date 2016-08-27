function hideTasks() {
  $('.task-container').each(( index, task ) => {
    $(task).css('display', 'none');
  });
}
