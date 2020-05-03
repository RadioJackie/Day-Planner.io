$(document).ready(function() {
  
  
    const test = false;
  
    const now = moment()
    console.log(now)
  $("#currentDay").text(now.format("dddd, MMMM Do YYYY, h:mm a"))
   
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');
  
    if (test) 
      nowHour24 = 13;
      nowHour12 = 1;
})

$(".saveBtn").on("click", function(){
  let $saveBtn = $('<i>');
    $saveBtn.attr('class',"bi bi-shield-lock-fill");
})

let $dailyPlanSpn = $('<input>');

$dailyPlanSpn.attr('id',`input-${index}`);
$dailyPlanSpn.attr('hour-index',index);
$dailyPlanSpn.attr('type','text');
$dailyPlanSpn.attr('class','dailyPlan');
$dailyPlanSpn.val( planTextArr[index] );
