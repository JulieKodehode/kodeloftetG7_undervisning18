/* 
Lesson 23.april going through:
    - Array
    - For loops
*/

// Array storing multiple data
const fruitBowl = ["Banana", "Orange", "Apple", "Grape"];

console.log(fruitBowl);
console.log(fruitBowl[0]);
console.log(fruitBowl[1]);
console.log(fruitBowl[2]);


// For loop that loops through our array
for (
    // New variable called 'index' that saves the number 0
    let index = 0; 
    // Checks if 'index' is smaller then the length of our fruitbowl
    index < fruitBowl.length;
    // Reassign a new value to index
    index = index + 1
    ) {
        console.log(fruitBowl[index]);
    };


// Traditional for loop
/* for (
    let i = 0; 
    i < fruitBowl.length; 
    i++) {
    console.log(fruitBowl[i]);
}
*/