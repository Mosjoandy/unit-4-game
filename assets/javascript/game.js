var wins = 0;
var losses = 0;
var target = Math.floor(Math.random() * 100) + 19;
var attempt = 0;

var gem1rando = Math.floor(Math.random() * 13) + 1;
var gem2rando = Math.floor(Math.random() * 13) + 1;
var gem3rando = Math.floor(Math.random() * 13) + 1;
var gem4rando = Math.floor(Math.random() * 13) + 1;

$("#gem1").on("click", function() {
    console.log("You clicked a gem: " + gem1rando);
})

$("#gem2").on("click", function() {
    console.log("You clicked a gem: " + gem2rando);
})

$("#gem3").on("click", function() {
    console.log("You clicked a gem: " + gem3rando);
})

$("#gem4").on("click", function() {
    console.log("You clicked a gem: " + gem4rando);
})

