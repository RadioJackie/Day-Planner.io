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

$("#icon").on("click", function(){
  //alert("Working")
})
