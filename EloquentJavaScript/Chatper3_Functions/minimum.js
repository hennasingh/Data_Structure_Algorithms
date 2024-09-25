/**
 * The standard function Math.min that returns its smallest argument. 
 * We can write a function like that ourselves now. Define the function min that
 *  takes two arguments and returns their minimum
 */

function min(num1, num2){
    return num1 > num2 ? num2: num1
}

console.log(min(0, 10));
console.log(min(0, -10));