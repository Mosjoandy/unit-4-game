var wins = 0;
var losses = 0;
var target = Math.floor(Math.random() * 100) + 19;
var attempt = 0;

var gem1rando = Math.floor(Math.random() * 13) + 1;
var gem2rando = Math.floor(Math.random() * 13) + 1;
var gem3rando = Math.floor(Math.random() * 13) + 1;
var gem4rando = Math.floor(Math.random() * 13) + 1;

// Gemstones are hooked to on.click function
    $("#gem1").on("click", function() {
        console.log("You clicked a gem: " + gem1rando);
    //adding clicked gem number to "attempt"
        attempt += gem1rando;
        console.log("Your total attempt: " + attempt);
    })

    $("#gem2").on("click", function() {
        console.log("You clicked a gem: " + gem2rando);
        attempt += gem2rando;
        console.log("Your total attempt: " + attempt);
    })

    $("#gem3").on("click", function() {
        console.log("You clicked a gem: " + gem3rando);
        attempt += gem3rando;
        console.log("Your total attempt: " + attempt);
    })

    $("#gem4").on("click", function() {
        console.log("You clicked a gem: " + gem4rando);
        attempt += gem4rando;
        console.log("Your total attempt: " + attempt);
    })

