'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function(){
    $('.content').hide();
    $('#' + $(this).attr('data-content')).show();
  });
  $();
};

projectView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('.read-on').on('click', function(event){
    event.preventDefault();
    var $theLink = $(this);
    var $theArticleBody = $theLink.siblings('.article-body');
    $theArticleBody.children().show();
    $(this).hide();
  });
};

$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});
