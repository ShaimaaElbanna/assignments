//2.1 Say you would like to write a program that doubles the odd 1.3
//numbers in an array and throws away the even 4.2 number.

//Your solution could be something like this:

const numbers = [1, 2, 3, 4];
const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log('The doubled numbers are', newNumbers); // ==> [2, 6]
//Rewrite the above program using map and filter don't forget to use =>.

let doubledNumber = numbers.filter(i => i % 2 !== 0).map(i=>  i * 2)

console.log("The doubled numbers are " , doubledNumber)

