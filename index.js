console.log("Hello World!");

/**
 * 1. Declare a variable `age` and assign your age to it.
 * Write it out in the console together with a description
 * of the age. Like, "this is my age...".
 */
let age = 25;
console.log(`this is my age: ${age}`);

/**
 * 2. Declare three variables using the 
 * three different keywords that we have learned. 
 * Write them all out in the console.
 * What was the different between these keywords?
 */
const bool = false;
let str = "text";
var number = 123;
console.log(bool, str, number);
// const is "constant", const and let are block scope, var is not

/**
 * 3. Declare three different variables, one of each data type.
 * Assign them values and log them to the console in three different logs.
 */
let v1 = true
let v2 = 100.10
let v3 = "3"
console.log(v1)
console.log(v2)
console.log(v3)

/**
 * 4. Create a `const` variabel called `name` and assign a value to it.
 * Log it to the console. On a new line, try to reassign the value.
 * Log that to the console. Does it work?
 * If it doesn't, think about why that is. How would you correct it?
 */
const name = "name"
console.log(name)
//name = "noname"
console.log(name)
// no, change const to let

/**
 * 5. Think about one case when we would
 * like to use a boolean value.
 * Discuss it with another person.
 */

// toggling dark or light mode

/**
 * 6. If we create a variable that we know is not going to
 * change its value during the duration of our program,
 * should we declare it using `let` or `const` and why?
 */

// const, since it prevents accidental changes to the value
// also throws errors if a change is attempted

/**
 * 7. Create two numbers, save them in the variables
 * `number1` and `number2`. Add these two variabels together
 * and save the `result` in a new variable that you log to the console.
 */

const number1 = 100
const number2 = 200
const result = number1 + number2
console.log(result)

/**
 * 8. Reuse the `number1` and `number2` variables and create three new variables:
   - `result1` should contain the difference (subtraction) between the numbers
   - `result2` should contain the product (multiplication) of the two numbers
   - `result3` should contain the quotient (division) of the two numbers
   - Log them all to the console.
 */

const result1 = number1 - number2
const result2 = number1 * number2
const result3 = number1 / number2
console.log(result1, result2, result3)

/**
 * 9. Create a variable `a` and assign it a value.
 * Log it to the console. Now add 5 to `a` by reassigning the value of `a`
 * by using the existing `a` and the number 5. Log it to the console.
 */

let a = 5
console.log(a)
a += 5
console.log(a)

/**
 * 10. What is the value of `a` in the console.log?

js
let a = 10;
a = a - 4;
a = 7;
a = a + 2;

console.log(a);

*/

a = 10;
a = a - 4;
a = 7;
a = a + 2;

console.log(a); // 9

/**
 * 11. Explain each line of code in the previous question for a friend.
 */

// a = 10
// a = 10-4
// a = 7
// a = 7 + 2
// a === 9