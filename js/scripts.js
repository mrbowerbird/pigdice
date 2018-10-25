//Business Logic
function PlayerRoll() {
  this.roll = 0;
  this.turnTotal = 0;
  this.finalScore = 0;
};

PlayerRoll.prototype.rollDie = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
  if (this.roll === 1) {
    this.turnTotal = 0;
    alert("You're done");
    $("#Roll1").hide();
    $("#Hold1").hide();
    $("#Roll2").show();
    $("#Hold2").show();

  } else {
    console.log("The latest roll: " + this.roll)
    this.turnTotal += this.roll;
    if ((this.finalScore + this.turnTotal) < 100) {
    console.log("The latest roll (WIN CHECK): " + this.roll)
    console.log("Player 1 Overall score is: " + this.finalScore)
    } else {
      console.log("Your Overall score is: " + (this.finalScore + this.turnTotal) + " YOU WIN!");
          $("#Roll2").hide();
          $("#Hold2").hide();
    }
  }
  console.log("The Total for the turn: " + this.turnTotal);
};

PlayerRoll.prototype.holdEm = function() {
  this.finalScore += this.turnTotal;
  alert("You're done!  Your score is " + this.finalScore);
  $("#Roll1").hide();
  $("#Hold1").hide();
  $("#Roll2").show();
  $("#Hold2").show();
  this.roll = 0;
  this.turnTotal = 0;

};


// Player 2 stuff

function PlayerRoll2() {
  this.roll2 = 0;
  this.turnTotal2 = 0;
  this.finalScore2 = 0;
};

PlayerRoll2.prototype.rollDie2 = function() {
  this.roll2 = Math.floor(Math.random() * 6) + 1;
  if (this.roll2 === 1) {
    this.turnTotal2 = 0;
    alert("You're done");
    $("#Roll2").hide();
    $("#Hold2").hide();
    $("#Roll1").show();
    $("#Hold1").show();
  } else {
    console.log("The latest roll: " + this.roll2)
    this.turnTotal2 += this.roll2;
    if ((this.finalScore2 + this.turnTotal2) < 100) {
    console.log("The latest roll: " + this.roll2)
    console.log("Player 2 Overall score is: " + this.finalScore2)
    } else {
      console.log("Your Overall score is: " + (this.finalScore2 + this.turnTotal2) + " YOU WIN!");
          $("#Roll1").hide();
          $("#Hold1").hide();
    }
  }
  console.log("The Total for the turn: " + this.turnTotal2);
  };

PlayerRoll2.prototype.holdEm2 = function() {
  this.finalScore2 += this.turnTotal2;
  alert("You're done!  Your score is " + this.finalScore2);
  $("#Roll2").hide();
  $("#Hold2").hide();
  $("#Roll1").show();
  $("#Hold1").show();
  this.turnTotal2 = 0;
  this.roll2 = 0;
};

// UI logic
$(document).ready(function() {
  var newPlayer1 = new PlayerRoll();
  var newPlayer2 = new PlayerRoll2();

  $("#Roll1").click(function(event) {
    event.preventDefault();
    newPlayer1.rollDie();
  });

  $("#Hold1").click(function(event) {
    event.preventDefault();
    newPlayer1.holdEm();
  });

  $("#Roll2").click(function(event) {
    event.preventDefault();
    newPlayer2.rollDie2();
  });

  $("#Hold2").click(function(event) {
    event.preventDefault();
    newPlayer2.holdEm2();
  });
});
