let  readlineSync  =  require('readline-sync');

var enterVan = confirm("You come across a strange Van down by the river. Do you want to see what is inside. ");

//alert(enterVan);

if(enterVan == true){
  //you enter the Van
  alert("You think you have seen this Van before and take a look");
  var beerChoice = prompt("You slide open the door and see mini fridge with 3 beers inside. Do you drink only 1, 2 or 3?")
if(beerChoice == 1){
  //you only drink one beer
  alert("The beer is nice and cold, you savor the taste. You realize the time and continue on your way. The End");
}
else if(beerChoice == 2){
  //you drink two 
  alert("You can't help yourself to have just one. You realize your a little buzzed and a noise in the distance scares you off. The End");
}
else {
  //you drink all three
  alert("You didnt expect to start partying this early in the day");
//if you drink enough you hang around some more 
  var lightChoice = prompt(" You look around some more and notice an ash tray with a cigar and two zippo lighters. One is stainless steel and the other looks gold. Which one do you reach for ");
    if (lightChoice == "gold"){
      alert("You reach for the lighter when all of sudden you hear a man yell from accross the river. You grab your stuff and get the hell outta there. The End ");
      
    }
    //you choose the lighter that works
    else {
      alert("You light up the cigar and take a look around");
      var driveChoice = prompt("As you enjoy your cigar, and with no one around you decide to see if the Van will start. You find the keys in the ignition. Do you turn the key?");
      if (driveChoice == "yes"){
        alert("The Van starts right up and as you drive a away you notice a heavy set man in a plaid shirt running after you in the Van down by the river. The End")
      } else {
        alert("Suddenly you hear yelling coming from the other side of the river. You jump out and continue on your way.  ....The End ")
      }
    }
    }
}



else {
  //you dont enter Van
  alert("You could care less and cointinue on your way. The End")
}
/*************************************************************
 

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');


console.log( "Welcome to Batman: Arkham Asylum!" );
console.log( "What do you want to do?" );
let option = readlineSync.question( "Options: look around, smack a prisoner, run away" );

switch(option) {
  case "look around":
    console.log( "You see a bunch of angry prisoners and the Joker!" );
    break;
  case "smack a prisioner":
    console.log( "Ouch! What did I ever do to you, man?" );
    break;
  case "run away":
    console.log( "Batman: \"Bats can't run.\"" );
    break;
  default: 
    console.log( "A prisoner punches you in the face." );
    console.log( "Prisoner: \"Quit messin' around.\"" );
} 

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}


switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

***************************************************/