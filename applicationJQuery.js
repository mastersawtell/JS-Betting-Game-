var total = 100;

 $(document).ready(function(){
   displayTotal();
   $("#makebet").submit(function(event) {
     var bet = +$("#bet").val();
     var guess = +$("#guess").val();
     var msg = placeBet(guess,bet);
     $("p").text(msg); 
     event.preventDefault();
   });
 });

document.addEventListener('DOMContentLoaded', function() {
 
  displayTotal();
 
  var form = document.getElementById('makebet');
  var msg = document.getElementById('msg');

  form.addEventListener('submit', function(event) {
    var bet = +form.elements['bet'].value;
    var guess = +form.elements['guess'].value
    msg.innerHTML = placeBet(guess,bet);
    event.preventDefault();
  });

});

function displayTotal(){
  document.getElementById('total').innerHTML = total;
}

function placeBet(guess, bet){
  if (total <= 0){
    return 'Game OVER!';
  } else if (total < bet){
    return 'You don\'t have enough money to make the bet';
  } else {
    return makeBet();
  }

  function makeBet(){
    var ans = Math.floor((Math.random() * 10) + 1);
    if (guess === ans){
      total += bet;
    } else if ( guess === ans+1 || guess === ans-1){
      // do nothing
    } else {
      total -= bet;
    }
    displayTotal();
    return ('You guessed '+ guess +'. The number is '+ ans + '.');
  }
}