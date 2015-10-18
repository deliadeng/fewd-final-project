/******* array lets you store a set of variables inside a variable (as I'm doing here) ********/

///************* TO RANDOMISE IMG ************************************/////

var nameofImg='img/bowls-of-rice'+randomNumber+'.png';

/** bowls-of-rice is the img source, and png is the extension, this creates string for it **/

//$('#ricebowls').html('<img src="images/' + nameofImg + '">');
//
///** the "> puts img tag into html **/ /*****didn't use this code, using transparent img is easier *******/

$('#transparentimg').attr('src',nameofImg);

/** attach this code to the 'play again' function' on click, and it'll randomly bring up image in that folder that begins with 'img/bowls-of-rice' **/

/******************** TO RANDOMISE CHOICES *********************/////

var randomNumber = Math.floor((Math.Random()*10)+1);

/** floor gets rid of all digits after the decimal point. *10 rounds it up (since it's giving you random numbers from 1-10), +1 gives you a number between 1-10 (in case it gives you a value of 0) **/

//var choicesElements = [
//    "<p>Choice 1</p>",
//    "<p>Choice 2</p>"
//    /***** repeat this to match with all the choices you want to randomise ****/ 
//////////////*****not using this, using the http://api.jquery.com/slice/ instead ********///////////////////
//];

//var possibleChoices[0] = chociesElement[rNum - 1];

/****** decared array here, and the [0] is the first choice, rNum - 1 because want it to be between 0-9 *******/

/******** because there are 4 choices, can choose top 3 from the randomised, and then choose one choice that appears for sure (so that the correct choice is always one of the options) *********/

for (i=0; i < 10; i++) {
    
    $("#choices p:nth-child(" + randomNumber + ")").detach.prespendTo$("#choices");
    
}
                      
/****** detaches from quiz, and then moves it to first element inside the 'quiz' div, test this out, may not work yet!!! ***********/

/****** move random numbers to top, and do this 10 times to make sure it's fully shuffled, see https://css-tricks.com/almanac/selectors/n/nth-child/ ********/

$("#choices p").slice(4, 9).css("display","none");

/******* this will hide the bottom 6 ***********//

////////********** from here, make sure the right answer is among the top 4 ****************////////////
