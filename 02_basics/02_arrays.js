const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","flash","batman"];

// marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes);

//push can add the new array as an full single array not split into single elements

const allheroes=marvel_heroes.concat(dc_heroes);
console.log(allheroes);

// concat can take take all the elements of two array and split it into single element

const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

//spread can behave the same as the concat function but here is an advantage that more than two array can be concat in one operations

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));