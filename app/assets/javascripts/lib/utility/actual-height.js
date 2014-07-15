$.fn.actualHeight = function(){
    // find the closest visible parent and get it's hidden children
    var visibleParent = this.closest(':visible').children(),
        thisHeight;

    // set a temporary class on the hidden parent of the element
    visibleParent.addClass('temp-show');

    // get the height
    thisHeight = this.height();

    // remove the temporary class
    visibleParent.removeClass('temp-show');

    return thisHeight;
};

$.fn.actualOuterHeight = function(boolean){
    // find the closest visible parent and get it's hidden children
    var visibleParent = this.closest(':visible').children(),
        thisHeight;

    // set a temporary class on the hidden parent of the element
    visibleParent.addClass('temp-show');

    // get the height
    thisHeight = this.outerHeight(boolean);

    // remove the temporary class
    visibleParent.removeClass('temp-show');

    return thisHeight;
};