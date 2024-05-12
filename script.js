/*
String Manipulation Functions:

Reverse a String: Write a function that reverses a given string.
Count Characters: Create a function that counts the number of characters in a string.
Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
*/
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("hello"));



function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello"));


function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("hello world")); 




/*
Array Functions:

Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
Sum of Array: Create a function that calculates the sum of all elements in an array.
Filter Array: Implement a function that filters out elements from an array based on a given condition.
*/
const numbers = [10, 5, 20, 8, 3];



function findMax(arr) {
    return Math.max(...arr);
}
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Maximum:", findMax(numbers));
console.log("Minimum:", findMin(numbers));


function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum:", sumArray(numbers));


function filterArray(arr, condition) {
    return arr.filter(condition);
}
const condition = num => num > 5;
console.log("Filtered array:", filterArray(numbers, condition));


/*
Mathematical Functions:

Factorial: Write a function to calculate the factorial of a given number.
Prime Number Check: Create a function to check if a number is prime or not.
Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));



function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));

function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}
console.log(fibonacci(10));


