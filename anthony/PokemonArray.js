// var myPokemonRoster = ["Charizard", "Jolteon", "Snorlax", "Blastoise", "Venasaur"];
// // console.log(myPokemonRoster);
// var firstToFight = myPokemonRoster [0];
// var secondToFight = myPokemonRoster [1];
// myPokemonRoster.pop();
// myPokemonRoster.push("raichu");
// myPokemonRoster.push("celebi");
// var rosterSize = myPokemonRoster.length;

var myPokemonRoster = ["Charizard", "Jolteon", "Snorlax", "Blastoise", "Venasaur"];
// for (var i = 0; i < myPokemonRoster; i++) {
//     console.log(myPokemonRoster[i]);
// }
for (var i = myPokemonRoster - 1; i >= 0; i = i--) {
    console.log(myPokemonRoster[i]);
}