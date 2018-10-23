//Business Logic
function PlayerRoll(roll, turnTotal, finalScore) {
  this.roll = 0
  this.turnTotal = 0
  this.finalScore = 0
};

PlayerRoll.prototype.randomizer = function() {
  this.roll = Math.floor(Math.random() * 6) + 1;
  return this.roll;
};

// UI logic
$(document).ready(function() {
  $("form.Player1").submit(function(event) {
      event.preventDefault();
    var Roll1 = $("#Roll1").val();
    var turnTotal1 = 0;
    var finalScore1 = 0;

    var newPlayer1 = new PlayerRoll(Roll1, turnTotal1, finalScore1);
    var output = newPlayer1.randomizer();
    console.log(output);
  });
});
