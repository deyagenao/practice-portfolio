// function for making project description visibile on hover
$(".project").hover(function(){
  // var projectNum = $(this).data("num");
  $(".project-description").show();
}, function() {
  $(".project-description").hide();
})