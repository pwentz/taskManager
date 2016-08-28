function markAsComplete(task) {
  $(task).find('.fi-x').toggleClass('hide');
  $(task).find('.fi-check').toggleClass('hide');
  $(task).find('.edit-task').toggleClass('hide')
  strikeWords(task)
}

function strikeWords(task) {
  if ($(task).find('.fi-x').hasClass('hide')) {
    $(task).find('.task-head').wrap('<strike>');
    $(task).find('.task-body').wrap('<strike>');
  }
  else {
    $(task).find('.task-head').unwrap('<strike>');
    $(task).find('.task-body').unwrap('<strike>');
  }
}
