//we can set the value of todays date automatically as we load the page in the date section
var dateControl = document.querySelector('input[type="date"]');
var timeControl = document.querySelector('input[type="time"]');
var eventNameControl = document.querySelector('#eventName');
var startControl = document.querySelector('#func');
var daysControl = document.querySelector('#days');
var hoursControl = document.querySelector('#hours');
var minutesControl = document.querySelector('#minutes');
var secondsControl = document.querySelector('#seconds');



var timeLeft = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
var eD ;
var myVar ;
var flag = 1;

  dateControl.addEventListener("input", function(){
   let eventDate = dateControl.value;
   eD = new Date(eventDate);

   let a = document.querySelector('.hidden2');
   a.style.display = "none";
   myStopFunction(); //stop the time
                                                  });


  eventNameControl.addEventListener("input", function(){

    let a = document.querySelector('.hidden');
    a.style.display = "none";

  });


startControl.addEventListener("click" , function(){

  //inputvalidation


  if( dateControl.value == "" || eventNameControl.value == "")
  {
error();
  }
  else

     {
            //start the timer
          if(flag == 1){
             myVar = setInterval(myTimer, 1000);
             flag = 0;
          }
          else {
              myStopFunction(); //stop the time
          }

      }

});




function myTimer(){

    let today = new Date();
    let tD = today.getTime();

   timeLeft = tD - eD ;
   daysLeft = Math.round(Math.abs(timeLeft / (60*60*1000*24)));
   hours =   Math.floor(Math.abs((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
   minutes = Math.floor(Math.abs((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
   seconds = Math.floor(Math.abs((timeLeft % (1000 * 60)) / 1000));

   daysControl.value = daysLeft;
   hoursControl.value = hours;
   minutesControl.value = minutes;
   secondsControl.value = seconds;
   startControl.innerText = "Stop";

   if(daysLeft==0 && hours== 0 && minutes == 0 && seconds == 0)
   {
     myStopFunction();
     daysControl.value = D;
     hoursControl.value = O;
     minutesControl.value = N;
     secondsControl.value = E;
   }
};


function myStopFunction() {

  clearInterval(myVar);
  flag = 1;
  daysControl.value = 0;
  hoursControl.value = 0;
  minutesControl.value = 0;
  secondsControl.value = 0;
  startControl.innerText = "Start";


};


function error(){


  if(dateControl.value == "")
  {
  let a = document.querySelector('.hidden2');
  a.style.display = "block";
  }

  if (eventNameControl.value == "") {
    let a = document.querySelector('.hidden');
    a.style.display = "block";
  }

};
