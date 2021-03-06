// // *****************CHAINING METHODS EXERCISE*****************
/*instructions
Sort the numbers in DESCENDING order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then substract 1.
Then output (console) the sum of all the resulting numbers.
*/

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let chainingResult = integers
// Sort the numbers in descending order (10, 9, 8, 7, etc).
.sort((a,b) => {return a-b})
.reverse()
// Remove any integers greater than 19.
.filter((num) => {return num < 19})
// Multiply each remaining number by 1.5 and then substract 1.
.map((num) => { return (num * 1.5) -1 })
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
.reduce((previous, current) => { return previous + current});
 // console.log("result", chainingResult);

 console.log("chainingResult: ", chainingResult);