// Display a working clock on the screen using the Date() object, and onload() instead of onclick()
var timeDiv = document.getElementById('time')


function startTime() {
    var currentTime = new Date()
    var h = currentTime.getHours()
    var m = currentTime.getMinutes()
    var s = currentTime.getSeconds()
    
//     change military time to standard time
    if (h >= 12) {
      h = h - 12
    }

//     add a zero in front of numbers < 10
    function checkTime(i) {
      if (i < 10) {
          i = "0" + i
      }
      return i
  }
    //set hours to updated hours
    h= checkTime(h)
    // set minutes to updated minutes
    m = checkTime(m)
    // set seconds to updated seconds
    s = checkTime(s)

    //display the clock on the screen
    timeDiv.innerHTML = h + ":" + m + ":" + s

    //iterate throught the time, 1 second at a time
    setTimeout(function () {
        startTime()
    }, 1000)
}

// add eventlistener to html
timeDiv.addEventListener('load', startTime(), false)

//Display a working day on the screen using the Date() object, and onload() instead of onclick()
var dayDiv = document.getElementById('day')
function startDay() {

  var currentDate = new Date();
  var day = document.getElementById('d')
   month = document.getElementById('m')
   year = document.getElementById('y')

  var DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    var dayOfWeek = currentDate.getDay()
        month = currentDate.getMonth()
        year = currentDate.getFullYear()
        day = currentDate.getDate()

    dayOfWeek = DaysOfWeek[dayOfWeek]
      month = Months[month]

    switch (day) {
      case 1:
        day = day + "st";
        break;
      case 2:
        day = day + "nd";
        break;
      case 3:
        day = day + "rd";
        break;
      case 21:
        day = day + "st";
        break;
      case 22:
        day = day + "nd";
        break;
      case 23:
        day = day + "rd";
        break;
      case 31:
        day = day + "st";
        break;
      default:
        day = day + "th";
    }

    d.innerHTML = dayOfWeek;
    m.innerHTML = day + " " + "of" + " " + month;
    y.innerHTML = year;

  }

  startDay();
