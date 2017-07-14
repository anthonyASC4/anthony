function rand (num) {
    // returns a random integer between 0 and num 
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

function randLetter(){
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomNum = rand(alphabet.length);
    var letter = alphabet[randomNum];
    return letter
}

function randWord() {
    var word = "";
    for (var i = 0; i < 5; i++) {
        // console.log(randLetter());
        word = word + randLetter();
    }
    return word;
}

function randSentence() {
    var sentence = "";

    for (var i = 0; i < 5; i++) {
        sentence = sentence + randWord() + " ";
    }
    return sentence;
}

// function randWord(word){
//     var randWord = word * Math.random();
//     var result = Math.floor(randWord);
//     return result;
// }
// var firstPokemon = ["Pikachu", 20, 100];
// var secondPokemon = ["Charizard", 50, 200];
// function pokeAttack(firstPokemon, secondPokemon){
    
// }