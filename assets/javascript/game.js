var wins = 0;
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
    
}

//Generate a random number!
resetGame();

if (attempt < target) {

    // Gemstones are hooked to on.click function
    $("#gem1").on("click", function() {
        console.log("You clicked a gem: " + gem1rando);
    //adding clicked gem number to "attempt"
        attempt += gem1rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
    })

    $("#gem2").on("click", function() {
        console.log("You clicked a gem: " + gem2rando);
        attempt += gem2rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
    })

    $("#gem3").on("click", function() {
        console.log("You clicked a gem: " + gem3rando);
        attempt += gem3rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
    })

    $("#gem4").on("click", function() {
        console.log("You clicked a gem: " + gem4rando);
        attempt += gem4rando;
        console.log("Your total attempt: " + attempt);
        $(".showAttempt").text(attempt);
    })

    
} else {

}



// if (attempt == target) {
//     console.log("You win!");
//     resetGame();
//     wins++;

// } else if (attempt > target) {
//     console.log("You lose!");
//     resetGame();
//     losses++;
// }





// if (attempt === target) {
//     console.log("You win!")
//     resetGame();
//     wins++;

// } else if (attempt >= target) {
//     resetGame();
//     losses++;
// }



// // if the added attempts is LESS THAN the target, then:
//     if (attempt <= target) {

//     //continue playing until attempts is EQUAL to target: 
//     // reset the game and add to wins
//         if (attempt === target) {
//         resetGame();
//         wins++;
//         }
//     //continue playing until attempts is GREATER THAN the target rese:
//     // reset the game and add to loss
//         if (attempt >= target) {
//             resetGame();
//             losses++;
//         }
//     }

