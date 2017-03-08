  var computerChoices = ["a", "b", "c","d","e","f", "g","h","i","j", "k","l","m","n","o","p","q","r","s","t","u","v","w", "x", "y", "z"];

      
      var wins = 0;
      var losses = 0;
      
      var remaining = 9;
      var guesses = 0;
      var UserGuessHistory = "";

         
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      
      document.onkeyup = function(event) {

        

        var userGuess = event.key;

         
    UserGuessHistory = UserGuessHistory + ", " + userGuess
        
         if ( userGuess == computerGuess ){
          wins++;
         }
         else if ( userGuess != computerGuess ){
         // losses++;
          remaining--;
          guesses = userGuess;

         }
          if (remaining == 0){
          losses++;
          UserGuessHistory = " ";
          remaining = 9;

         }
         
          var html = "<p>Guess What Letter I'm Thinking..</p>" +
           "<p>wins: " + wins + "</p>" +
           "<p>losses: " + losses + "</p>" +
         
           "<p>Guesses Left: " + remaining + "</p>" +
           "<p>Your Guesses So Far: " + UserGuessHistory + "</p>" ; //+
          


          
          document.querySelector("#game").innerHTML = html;

        }
      