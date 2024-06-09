// 1. Interviewer: Rana, imagine you have an array like [3, 7, 11, 2, 9].
// How would you write JavaScript code to find the sum of all these numbers?

// let arr = [3, 7, 11, 2, 9];

// let sum = arr.reduce((x , y) =>{
//    return x + y
// },0)

// console.log(arr);
// console.log(sum);


// Interviewer: Rana, imagine you're given a number, say num, and you need to
//  determine whether it's even or odd. How would you write JavaScript code to do that?

// let value = parseInt(prompt("Enter a Number"))

// function func(){
//     if(value % 2 == 0){
// console.log(`Number is Odd`);
//     }
//     else{
//         console.log(`Number is Even`);
//     }
// }

// func()

// Interviewer: Rana, imagine you have a string, for example, "hello", and
//  you need to reverse it to "olleh" using JavaScript. How would you approach this problem?

// let a = "Hello"
// let reverse = a.split('').reverse().join('')


// console.log(reverse);
// console.log(a);


// Interviewer: Rana, suppose you're given a string, such as "radar", and you need 
// to determine whether it's a palindrome (reads the same forwards and backwards).
//  How would you approach this problem using JavaScript?


// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Compare the original string with its reverse
//     return str === str.split('').reverse().join('');
// }

// // Example usage
// var str1 = "radar";
// var str2 = "hello";

// console.log(isPalindrome(str1)); // Output: true
// console.log(isPalindrome(str2)); // Output: false



// Interviewer: Rana, imagine you have an array with duplicate elements,
//  like [1, 2, 3, 3, 4, 5, 5, 6], and you need to write JavaScript code
//   to remove these duplicates and return a new array with unique elements.
//    How would you approach this problem?


// let arr =  [1, 2, 3, 3, 4, 5, 5, 6];
// let newset = new Set (arr);
// let uniqear = [...newset]              
// console.log(arr);
// console.log(uniqear);




// Interviewer: Rana, suppose you have an array of numbers, such as [5, 10, 2, 8, 3],
//  and you need to write JavaScript code to find the largest and smallest numbers in 
//  this array. How would you approach this problem?

// let arr = [5, 10, 2, 8, 3]

// for(i = 0 ; i < arr.length ; i++){
    
//     console.log(arr[i]);
// }



// Interviewer: Rana, imagine you have an array of elements, such as ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'],
//  and you need to write JavaScript code to count the occurrences of each element in the array. How would you approach this problem?

// let ary = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple']

// for(i = 1 ; i < ary.length ; i++){
//     console.log(i , ary[i]);
// }

function countOccurrences(arr) {
    const counts = {};
   arr.forEach(element => {
   if (counts[element]) {
            counts[element]++;
        } else {

            counts[element] = 1;
    }});
           return counts;
}
const elements = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
const occurrences = countOccurrences(elements);
console.log(occurrences);







