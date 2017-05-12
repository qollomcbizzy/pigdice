//back-end logic
function Dice(dice1,dice2){
  this.number1=dice1;
  this.number2=dice2;
}
Dice.prototype.totalMarks = function () {
  if(this.number1 === 1 || this.number2 === 1){
    return   "you have lost";
  }
  else if((this.number1 + this.number2) === 40 ) {
    return  "congratulation you have won !!";
  }
  else {
  return this.number1 + this.number2;
}
};
//user interface
$(document).ready(function(){
  $("button#player1").click(function(event){
    event.preventDefault();
    $("span.remove1").remove();
    $("span.removediceno1").remove();
    $("span.removediceno2").remove();
    var inputedDice1=$('#p1dice1').attr('id');
    var inputedDice2=$('#p1dice2').attr('id');
    var d1=Math.floor(Math.random() * 30) +1;
    var d2=Math.floor(Math.random() * 30) +1;
    inputedDice1 = d1;
    inputedDice2 = d2;
    var newDice= new Dice(inputedDice1,inputedDice2);
    $("#output1").append("<span class='remove1'>" + newDice.totalMarks() + "</span>");
    $("span#di1").append("<span class='removediceno1'>" + d1 + "</span>");
    $("span#di2").append("<span class='removediceno2'>" + d2 + "</span>");
  });
  $("button#player2").click(function(event){
    event.preventDefault();
    $("span.remove2").remove();
    $("span.removedice1").remove();
    $("span.removedice2").remove();
    var inputedDice1=$('#p2dice1').attr('id');
    var inputedDice2=$('#p2dice2').attr('id');
    var d1=Math.floor(Math.random() * 30) +1;
    var d2=Math.floor(Math.random() * 30) +1;
    inputedDice1 = d1;
    inputedDice2 = d2;
    var newDice= new Dice(inputedDice1,inputedDice2);
  $("#output2").append("<span class='remove2'>" + newDice.totalMarks() + "</span>");
  $("span#d1").append("<span class='removedice1'>" + d1 + "</span>");
  $("span#d2").append("<span class='removedice2'>" + d2 + "</span>");
});
});
