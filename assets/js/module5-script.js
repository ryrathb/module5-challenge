moment(Date); //Date declaration

 $("#currentDay").text(moment().format('dddd MMMM do YYYY, h:mm a')); //Current Day display

 var CurrentTime = moment(); //Current time declared as the exact date 
 CurrentTime = CurrentTime.startOf("hour"); //Sets the current time as the hour

 var beforeTime = moment().startOf('day').add(9, "hours"); //Beginning of the day

 var timeOne = beforeTime.add(0, "h"); //First hour
 timeOne = timeOne.format('hh:mm A');
$(".block1").text(timeOne);

var timeTwo = beforeTime.add(1, "h"); //Second hour
 timeTwo = timeTwo.format('hh:mm A');
$(".block2").text(timeTwo);

var timeThree = beforeTime.add(1, "h"); //Third Hour
 timeThree = timeThree.format('hh:mm A');
$(".block3").text(timeThree);

var timeFour = beforeTime.add(1, "h"); //Fourth Hour
 timeFour = timeFour.format('hh:mm A');
$(".block4").text(timeFour);

var timeFive = beforeTime.add(1, "h"); //Fifth Hour
 timeFive = timeFive.format('hh:mm A');
$(".block5").text(timeFive);

var timeSix = beforeTime.add(1, "h"); //Sixth Hour
 timeSix = timeSix.format('hh:mm A');
$(".block6").text(timeSix); 

var timeSeven = beforeTime.add(1, "h"); //Seventh Hour
 timeSeven = timeSeven.format('hh:mm A');
$(".block7").text(timeSeven); 

var timeEight = beforeTime.add(1, "h"); //Eighth Hour
 timeEight = timeEight.format('hh:mm A');
$(".block8").text(timeEight);

var timeNine = beforeTime.add(1, "h"); //Ninth Hour
 timeNine = timeNine.format('hh:mm A');
$(".block9").text(timeNine);

function timeTest () { 

    timeOne = moment().startOf('day').add(9, "hours"); //Beginning of the day
    CurrentTime = CurrentTime.startOf("hour");
    if (CurrentTime.isAfter(timeOne)) { //Defines the boarding hours for the next 9
        $(".form9").addClass("past");
    }

    else if (CurrentTime.isBefore(timeOne)) {
        $(".form9").addClass("future")
    }

    else if (CurrentTime.isSame(timeOne)) {
        $(".form9").addClass("present");
    };

    timeTwo = moment().startOf('day').add(10, "hours");
    if(CurrentTime.isAfter(timeTwo)) {
        $(".form10").addClass("past");
    }

    else if (CurrentTime.isBefore(timeTwo)) {
        $(".form10").addClass("future");
    }

    else if (CurrentTime.isSame(timeTwo)) {
        $(".form10").addClass("present");
    };

    timeThree = moment().startOf('day').add(11, "hours");
    if (CurrentTime.isAfter(timeThree)) {
        $(".form11").addClass("past");
    }

    else if (CurrentTime.isBefore(timeThree)) {
        $(".form11").addClass("future");
    }

    else if (CurrentTime.isSame(timeThree)) {
        $(".form11").addClass("present");
    };

    timeFour = moment().startOf('day').add(12, "hours");
    if (CurrentTime.isAfter(timeFour)) {
        $(".form12").addClass("past");
    }

    else if (CurrentTime.isBefore(timeFour)) {
        $(".form12").addClass("future");
    }

    else if (CurrentTime.isSame(timeFour)) {
        $(".form12").addClass("present");
    };

    timeFive = moment().startOf('day').add(13, "hours");
    if (CurrentTime.isAfter(timeFive)) {
        $(".form1").addClass("past");
    }

    else if (CurrentTime.isBefore(timeFive)) {
        $(".form1").addClass("future");
    }

    else if (CurrentTime.isSame(timeFive)) {
        $(".form1").addClass("present");
    };

    timeSix = moment().startOf('day').add(14, "hours");
    if (CurrentTime.isAfter(timeSix)) {
        $(".form2").addClass("past");
    }

    else if (CurrentTime.isBefore(timeSix)) {
        $(".form2").addClass("future");
    }

    else if (CurrentTime.isSame(timeSix)) {
        $(".form2").addClass("present");
    };

    timeSeven = moment().startOf('day').add(15, "hours");
    if (CurrentTime.isAfter(timeSeven)) {
        $(".form3").addClass("past");
    }

    else if (CurrentTime.isBefore(timeSeven)) {
        $(".form3").addClass("future");
    }

    else if (CurrentTime.isSame(timeSeven)) {
        $(".form3").addClass("present");
    };

    timeEight = moment().startOf('day').add(16, "hours");
    if (CurrentTime.isAfter(timeEight)) {
        $(".form4").addClass("past");
    }

    else if (CurrentTime.isBefore(timeEight)) {
        $(".form4").addClass("future");
    }

    else if (CurrentTime.isSame(timeEight)) {
        $(".form4").addClass("present");
    };

    timeNine = moment().startOf('day').add(17, "hours");
    if (CurrentTime.isAfter(timeNine)) {
        $(".form5").addClass("past");
    }

    else if (CurrentTime.isBefore(timeNine)) {
        $(".form5").addClass("future");
    }

    else if (CurrentTime.isSame(timeNine)) {
        $(".form5").addClass("present");
    };

}


timeTest(); //Timetest declaration
var z = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < z.length; i++) { //For loop to get the hour data
    var hourData = localStorage.getItem(z[i]);
    $(".form" + z[i]).val(hourData);
}

$(".saveBtn").click(function () { //click event function
    event.preventDefault
    var valueForm = $(this).siblings(".form-control").val();
    console.log("This task was completed");
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, valueForm); //local storage
});






