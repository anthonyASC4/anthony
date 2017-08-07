var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup(){
$("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");

// add game info
$("body").append("<p> Ogres are attacking your villae! When you slay one, they drop 10 gold. The more gold you carry though the harder it is to defeat an ogre</p>");

    //add stats
    //TODO ADD STAT VALUES
    $("body").append("<h3>STATS</h3><p id='stats'>hello</p>");

    //add attack button
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");

    //add container for ogre images
    $("body").append("<div id='ogres'></div>");

    updateStats();
    
}

function updateStats() {
    $("#stats").text("HP: " + hp + "| Gold: " + gold + " | Ogres Slain: " + numberDefeated);
}

function attack(){
    if (hp > 0){ //player still alive
        if(Math.random() * 100 > gold){
            gold += 10; //gold = gold+10 
            numberDefeated++;
            $("#ogres").prepend("<p>You won! +10 gold. </p>");
        } else {
            gold--; //gold = gole -1 
            hp--;
            $("#ogres").prepend("<p>You lost! -1 gold. </p>");
        }
    updateStats(); 
    spawnOgre();
    }
}

function spawnOgre(){
    $("#ogres").prepend("<img src='http://www.52insk.com/wp-content/uploads/2015/08/Shrek.jpg'>");
}

$(document).ready(setup);

//add the game title
//add game info
//add the stats
//add ogre image
//when the player clicks the button
//      if the player has hp
//          IF THE PLAYER DEFEATS THE OGRE
//          add paragraph saying you win
//              + gold to player 
//              + num of ogres defeated
//      else
//          add paragraph saying you lost
//          - gold to player
//          -HP
//           update stats
//          add another ogre image
//          