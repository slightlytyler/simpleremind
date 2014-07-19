$.fn.toggleEditable = function(state){
  if(state){
    this.parents().find('.reminder-list').addClass('is-editing');
    $('#toggle-editable').addClass('active');
  } 
  else if(state === false){
    this.parents().find('.reminder-list').removeClass('is-editing');
    $('#toggle-editable').removeClass('active');
  }
  else{
    this.parents().find('.reminder-list').toggleClass('is-editing');
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