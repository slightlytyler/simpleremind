$.fn.toggleEditable = function(state){
  if(state){
    $('.is-editable').editable('enable');
    $('#toggle-editable').addClass('active');
  } 
  else if(state === false){
    $('.is-editable').editable('disable');
    $('#toggle-editable').removeClass('active');
  }
  else{
    $('.is-editable').editable('toggleDisabled');
    $('#toggle-editable').toggleClass('active');
  }
};

$.fn.toggleDestroy = function(state){
  if(state){
    this.parents().find('.reminder-list').addClass('is-destroying');
    $('#toggle-destroy').addClass('active');
  } 
  else if(state === false){
    this.parents().find('.reminder-list').removeClass('is-destroying');
    $('#toggle-destroy').removeClass('active');
  }
  else{
    this.parents().find('.reminder-list').toggleClass('is-destroying');
    $('#toggle-destroy').toggleClass('active');
  }
};