//Update date and time
function updateClock() {
    document.getElementById('currentDay').innerHTML = (moment().format('LLLL'));
}
setInterval(updateClock, 1000);

//set variables
var past = [];
var future = [];
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var currentTime = (moment().format('HH'));
// console.log(currentTime);

//function with for loop to apply time to time blocks
function timeblock () {
  for (var t = 0; t < hours.length; t++)
    if (hours[t] < 10) {
      $(".time" + hours[t]).text("0" + hours[t] + ":00" );
    } else {
      $(".time" + hours[t]).text(hours[t] + ":00" );
    }
}
//call to start timeblock function
timeblock();

//function with for loop to apply class to timeblocks which changes background color
function timeloop() {
    for (var t = 0; t < hours.length; t++)
        if (parseInt(currentTime) === hours[t]) {
            $(".state" + hours[t]).addClass("present");
        } else if (parseInt(currentTime) > hours[t]) {
            $(".state" + hours[t]).addClass("past");
        } else if (parseInt(currentTime) < hours[t]) {
            $(".state" + hours[t]).addClass("future");
        }    
}
//call to start timeloop function
timeloop();

//ready function runs once to check to verify that the document is accessible
$(document).ready(function(){
  // console.log("ready")

  //this goes to each data-store utem and 
$("*[data-store]").each(function(){
  $(this).val(localStorage.getItem("item" + $(this).attr("data-store")))
}) 

//saves each item upon a click event
$("button").on("click", function() {
  var element = $(this).val();
  var userText = $(this).siblings(".usertext").val();
  localStorage.setItem("item" + $("#textData" + element).attr("data-store"),userText)
});

})





