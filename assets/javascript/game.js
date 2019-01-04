var word = "s";
        var winner = 0;
        var loser = 0;
        var guessesLeft = 10;
        var validGuesses = "abcdefghijklmnopqrstuvwxyz"
        
        document.onkeypress = keyPressed;
        
        var guessSoFar = document.querySelector('#guessSoFar');
        var guessesLeftTag = document.querySelector('#guessesLeft');
        var loseTag = document.querySelector('#loser');
        var winTag = document.querySelector('#winner');
        
        function keyPressed(event) {
            var userGuess = event.key.toLowerCase()
            if (validGuesses.indexOf(userGuess) + 1) {
                if (word.includes(userGuess)) {
                    alert('You Win');
                    winner++;
                    winTag.innerText = winner;
                    guessSoFar.innerHTML = ""
                    guessesLeft = 10;
                    guessesLeftTag.innerText = guessesLeft;
                } else {
                    guessSoFar.innerHTML += userGuess + " ";
                    guessesLeft--;
                    guessesLeftTag.innerText = guessesLeft;
                    if (guessesLeft == 0) {
                        alert('You Lose');
                        loser++;
                        loseTag.innerText = loser;
                        guessSoFar.innerHTML = ""
                        guessesLeft = 10;
                        guessesLeftTag.innerText = guessesLeft;
                    }
                }
            } else {
                alert('please input valid letter')
            }
        }