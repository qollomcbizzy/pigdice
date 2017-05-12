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
  $("button#click").click(function(event){
    event.preventDefault();
    var inputedDice1=$(document).getElementById('dice1');
    var inputedDice2=$(document).getElementById('dice2');
    var d1=Math.floor(Math.random() * 6) +1;
    var d2=Math.floor(Math.random() * 6) +1;
    inputedDice1 = d1;
    inputedDice2 = d2;
    var newDice= new Dice(inputedDice1,inputedDice2);
  })
});
