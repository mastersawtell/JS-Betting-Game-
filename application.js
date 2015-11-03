var total = 100;

$(document).ready(function(){
  displayTotal();  
  
  $("#makebet").submit(function(event) {
    event.preventDefault();    

    var msgText = '';
    var submitbtn = $("#btn");
 
    if (submitbtn.val()=="New Game"){
      total = 100;
      submitbtn.val("Place Bet");
    }else {
      var bet = +$("#bet").val();
      var guess = +$("#guess").val();
      msgText = placeBet(guess,bet);

      if (total <= 0){
        submitbtn.val("New Game");
        msgText += ' Game OVER!';
      } 
    }
    displayTotal();
    $("#msg").text(msgText); 
  });
  
});

function displayTotal(){
  $("#total").text(total);
}

function placeBet(guess, bet){
  if (total < bet){
    return 'You don\'t have enough money to make the bet';
  } else {
    return makeBet();
  }

  function makeBet(){
    var ans = Math.floor((Math.random() * 10) + 1);
    if (guess == ans){
      total += bet;
    } else if ( guess == ans+1 || guess === ans-1){
      // do nothing
    } else {
      total -= bet;
    }
    return ('You guessed '+ guess +'. The number is '+ ans + '.');
  }
};