//Business Logic
function PlayerRoll(roll, turnTotal, finalScore) {
  this.roll = 0;
  this.turnTotal = 0;
  this.finalScore = 0;
};

PlayerRoll.prototype.randomizer = function() {
  return Math.floor(Math.random() * 6) + 1;
}

PlayerRoll.prototype.rollDie = function() {
  //this.roll = Math.floor(Math.random() * 6) + 1;
  if (this.roll === 1) {
    this.turnTotal = 0;
    alert("You're done");
  } else {
    console.log("The latest roll: " + this.roll)
    this.turnTotal += this.roll;
  }
  console.log("The Total for the turn: " + this.turnTotal);
  };


// UI logic
$(document).ready(function() {

  var newPlayer1 = new PlayerRoll();

  $("#Roll1").click(function(event) {
      event.preventDefault();
    // var Roll1 = $("#Roll1").val();
    // var turnTotal1 = 0;
    // var finalScore1 = 0;
//    debugger;
    newPlayer1.roll = newPlayer1.randomizer();
    newPlayer1.rollDie();
    // console.log(output);

  });

  //hold click event

});
