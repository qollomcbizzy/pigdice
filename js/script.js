//back-end logic
function Dice(dice1,dice2){
  this.number1=dice1;
  this.number2=dice2;
}
Dice.prototype.totalMarks = function () {
  return this.number1 + this.number2;
};
//user interface
$(document).ready(function(){
  $("button#player1").click(function(event){
    event.preventDefault();
    var inputedDice1=$('#p1dice1').attr('id');
    var inputedDice2=$('#p1dice2').attr('id');
    var d1=Math.floor(Math.random() * 6) +1;
    var d2=Math.floor(Math.random() * 6) +1;
    inputedDice1 = d1;
    inputedDice2 = d2;
    var newDice= new Dice(inputedDice1,inputedDice2);
    $("#output1").append(newDice.totalMarks());
  });
  $("button#player2").click(function(event){
    event.preventDefault();
    var inputedDice1=$('#p2dice1').attr('id');
    var inputedDice2=$('#p2dice2').attr('id');
    var d1=Math.floor(Math.random() * 6) +1;
    var d2=Math.floor(Math.random() * 6) +1;
    inputedDice1 = d1;
    inputedDice2 = d2;
    var newDice= new Dice(inputedDice1,inputedDice2);
  $("#output2").append(newDice.totalMarks());
});
});
