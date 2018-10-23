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
    //NEED TO ADD .SHOW feature when Player 1's turn again
    $("#Roll1").hide();
    $("#Hold1").hide();

  } else {
    console.log("The latest roll: " + this.roll)
    this.turnTotal += this.roll;
  }
  console.log("The Total for the turn: " + this.turnTotal);
  };

PlayerRoll.prototype.holdEm = function() {
  this.finalScore += this.turnTotal;
  alert("You're done!  Your score is " + this.finalScore);
  //NEED TO ADD .SHOW feature when Player 1's turn again
  $("#Roll1").hide();
  $("#Hold1").hide();
};

// UI logic
$(document).ready(function() {

  var newPlayer1 = new PlayerRoll();

  $("#Roll1").click(function(event) {
      event.preventDefault();
    newPlayer1.roll = newPlayer1.randomizer();
    newPlayer1.rollDie();
  });

  $("#Hold1").click(function(event) {
      event.preventDefault();
    newPlayer1.finalScore = newPlayer1.holdEm();
  });
});
