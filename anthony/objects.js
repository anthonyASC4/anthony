var charizardArray = ["Blaze", 266, false, ["Fire", "Flying"]];
var charizardObject = {
    "attack": "Blaze", 
    "HP": 266,
    "legendary": false,
    "types": ["Fire", "Flying"]
};

//var yeezyArray = ["Adidas", "Yeezy Boost 350", "Turtledove", "9", "$3200"];
var yeezys = {
    brand: "Adidas",
    model: "Yeezy Boost 350",
    color: "Turtledove",
    size: 9,
    price: 3200,
};

function Shoe(brand, model) {
    this.brand = brand; 
    this.model = model; 
}

var boosts = new Shoe("Adidas", "Yeezy Boost 350");
var stans = new Shoe("Adidas", "Stan Smiths");

function Superhero(heroName, realName, superpower){
    this.heroName = heroName;
    this.realName = realName;
    this.superpower = superpower;
    this.talk = function() {
        console.log("Hi I'm " + heroName);
    }
}

var superman = new Superhero("Superman", "Clark Kent", ["FLying", "Super Strength"]);

var spiderman = new Superhero("Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climbing"]);