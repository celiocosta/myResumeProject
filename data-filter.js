//using fiter()

var $items2 = $('.items2');
var $schoolname = $('.schoolname');
var $course = $('.course');
var $year2 = $('.year2');
var $url = $('.url');

onlineCourses.filter(function(item2, i){
  $items2.append('<option value = "' + i + '">' + item2.schoolname + '</option>');
});

$items2.on('change', function(){
  var online = onlineCourses[$items2.val()];

  if(online){
  $schoolname.html(online.schoolname);
  $course.html(online.course);
  $year2.html(online.year2);
  $url.html(online.url);
} else{
  $schoolname.html('');
  $course.html('');
  $year2.html('');
  $url.html('');
}
});
