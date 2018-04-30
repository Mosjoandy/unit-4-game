var wins = 0;
console.log(wins);
var losses = 0;
var target = Math.floor(Math.random() * 100) + 19;
var attempt = 0;

var gem1rando = Math.floor(Math.random() * 13) + 1;
var gem2rando = Math.floor(Math.random() * 13) + 1;
var gem3rando = Math.floor(Math.random() * 13) + 1;
var gem4rando = Math.floor(Math.random() * 13) + 1;

// Making a function to randomize the target and gems
function randomizer() {
    target = Math.floor(Math.random() * 100) + 19;
    gem1rando = Math.floor(Math.random() * 13) + 1;
    gem2rando = Math.floor(Math.random() * 13) + 1;
    gem3rando = Math.floor(Math.random() * 13) + 1;
    gem4rando = Math.floor(Math.random() * 13) + 1;
}

// Making a function that runs randomizer and sets attempt to 0
function resetGame() {
    randomizer();
    attempt = 0;
    $(".showTarget").text(target);
    $(".showAttempt").text(attempt);
    $(".showWins").text(wins);
    $(".showLosses").text(losses);
}

// winning/losing function that increase wins/losses and replaces center image
function youWin() {
    wins++;
    $(".placeholder").html("<img src='assets/images/youwin.gif' alt='winner' width='250px' height='185px' />");
}
function youLose() {
    losses++;
    $(".placeholder").html("<img src='assets/images/youlose.gif' alt='loser' width='250px' />");
}

//Generate a random number!
resetGame();


//replace initial instructions of game in .placeholder with a new image
//when a gem on the right is clicked
$(".gem").on("click", function() {
    console.log("change the image in center");
    $(".placeholder").html("<img src='assets/images/workingminer.gif' alt='worker' width='250px' />");
})

// Game begins here!

    // Gemstones are hooked to on.click function
    $("#gem1").on("click", function() {
        console.log("You clicked a gem: " + gem1rando);
    //adding clicked gem number to "attempt"
        attempt += gem1rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
        
        // conditional if attempt is equal to target, increase wins
        // update win counter on display, then reset game
            if (attempt === target) {
                youWin();
                $(".showWins").text(wins);
                resetGame();

        // conditional if attempt is greater than the target, increase losses
        // update losses counter on display, then reset game
            } else if (attempt > target) {
                youLose();
                $(".showLosses").text(losses);
                resetGame();
            }
    })
    
    //cloned code above for gemstone2
    $("#gem2").on("click", function() {
        console.log("You clicked a gem: " + gem2rando);
        attempt += gem2rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
            if (attempt === target) {
                youWin();
                $(".showWins").text(wins);
                resetGame();
            } else if (attempt > target) {
                youLose();
                $(".showLosses").text(losses);
                resetGame();
            }
    })

    //cloned code above for gemstone3
    $("#gem3").on("click", function() {
        console.log("You clicked a gem: " + gem3rando);
        attempt += gem3rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
            if (attempt === target) {
                youWin();
                $(".showWins").text(wins);
                resetGame();
            } else if (attempt > target) {
                youLose();
                $(".showLosses").text(losses);
                resetGame();
            }
    })

    //cloned code above for gemstone4
    $("#gem4").on("click", function() {
        console.log("You clicked a gem: " + gem4rando);
        attempt += gem4rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
            if (attempt === target) {
                youWin();
                $(".showWins").text(wins);
                resetGame();
            } else if (attempt > target) {
                youLose();
                $(".showLosses").text(losses);
                resetGame();
            }
    })