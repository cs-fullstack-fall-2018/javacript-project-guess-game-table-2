var clicks = 0;
var targets = 0;
var hits = 0;

function letsRock() {
    var theGo = document.getElementById("goGetIt");
    theGo.onclick = function () {
        // Get random number of targets and do setup
        var targetKount = document.getElementById("numberOfTargets").value;
        var targetTime = document.getElementById("displayTime").value;
        // No start the game!
        setUpTargetsAndPlay(targetKount, targetTime);
    };
}

// Utility function to get a random table cell number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// This function gets called if player hits a target
function clickedTarget() {
    // Right now, just updates a count.
    // Could use some player feedback here
    hits += 1;
};

// The main function that sets up targets and starts a game
function setUpTargetsAndPlay(numberOfTargets, displayTimeMs) {
    clicks = 0;
    targets = numberOfTargets;
    hits = 0;

    // Setup click detection for the entire table
    $("table").on("click", function () {

        clicks += 1;
        // alert("clicked. Max = " + clicks);
        if (clicks == targets) {
            alert("No more clicks! You got " + hits + " out of " + targets);
            // Turn off click detection
            $("td").off("click");
            $("table").off("click");
            $(".targetImg").remove();
        }
    });

    console.log("Selecting " + targets + " targets")
    // Get the number of targets specified and randomly picks cells to display them in for the target table
    for (var x = 0; x < targets; x++) {
        var targetNum = getRandomInt(1, 50); // Pick a random table cell
        console.log("Table cell selected for target = " + targetNum);
        var tdID = "td" + targetNum;
        var imgID = "img" + targetNum;

        $('#' + tdID).on("click", clickedTarget).append("<img id = " + imgID + " class= 'targetImg' src='nemo1.png'>");
        $('#' + imgID).delay(2000).show(0);
        $('#' + imgID).delay(displayTimeMs).hide(0);
    }

};
