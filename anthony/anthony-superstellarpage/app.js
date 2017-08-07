function setup(){
$("body").append("<h1>Welcome to SUPER STELLAR GAMES</h1>");

// add game info
$("body").append("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget fringilla nunc. Donec est justo, luctus id faucibus sed, cursus vehicula elit. In sed eros neque. Fusce pretium lobortis iaculis. Praesent pulvinar nisi quam, in ornare diam hendrerit vitae. Sed scelerisque ipsum ut molestie viverra. Aenean molestie nisl in dui interdum vehicula. Integer et suscipit purus. Sed in elementum dui. Aliquam risus ligula, ullamcorper eu odio sit amet, fringilla ornare tortor. Duis porttitor, tellus sit amet pharetra semper, enim risus varius urna, fringilla viverra quam risus id sem. Donec efficitur posuere nibh, quis faucibus lorem rutrum quis. Nam pellentesque, velit in auctor laoreet, ex quam pharetra justo, sed sagittis ipsum ex vitae est. Donec eu arcu massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>");

    //add stats
    //TODO ADD STAT VALUES
    $("body").append("<h3>Click Here New Releases </h3><p id='stats'></p>");

    //add attack button
    $("body").append("<button onclick='attack()'>Click Me!</button>");

    //add container for ogre images
    $("body").append("<div id='ogres'></div>");

    $("body").append("<h3> Donate to Us Here!")
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