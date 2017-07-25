// stats: NAME, TYPE, HP, DEF, ATK, LEGEND

// Arcanine, Fire, 90, 80, 110, True
// Kadabra, Psychic, 40, 30, 35, False
// Machamp, Fighting, 90, 80, 130, False
// Rapidash, Fire, 65, 70, 65, False
// Hypno, Psychic, 85, 70, 73, False
// Hitmonlee, Fighting, 50, 53, 120, False
// var stats = [
//     ["Arcanine, Fire, 90, 80, 110, True"]
//     ["Kadabra, Psychic, 40, 30, 35, False"]
//     ["Machamp, Fighting, 90, 80, 130, False"]
//     ["Rapidash, Fire, 65, 70, 65, False"]
//     ["Hypno, Psychic, 85, 70, 73, False"]
//     ["Hitmonlee, Fighting, 50, 53, 120, False"]
// ]
// for ( i=0; i<stats.length; i++ )
// {
//   for ( j=0; j<stats[i].length; j++ )
//   {
//     alert ( stats[i][j][0] + " is a " + animals[i][j][1] + " year old " + animals[i][j][2] );


var nestedArray = [
    [1, 2, 3],
    ["hello", true]
];
for (var i = 0; i < nestedArray.length; i++) {
    for (var j = 0; j < nestedArray[i].length; j++){
    console.log(nestedArray)
    }
}