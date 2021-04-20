/*
For my implementation I decided to make some functions 
that make use of different parts of java script



*/

/*

 This code goes through a range with the 
 start and end given as arguments

 Depending on each number in the range a different value
 is inserted into an array that is then returned

- For multiples of three, insert "Fizz"
- For multiples of five, insert "Buzz" 
- For numbers which are multiples of both three and five, insert "FizzBuzz" 
- For numbers which are neither a multiple of three nor a multiple of five, insert the number itself


*/

// JS defines methods with the keyword function

function fizzBuzz(start, end) {
  let array = [];
  // here I used let
  // I do not really need to set the variable type though

  // JS uses a for loop with the iteration defined in parentheses
  // and the scope in brackets

  for (var i = start; i <= end; ++i) {
    if (i % 3 == 0 && i % 5 == 0) {
      // maybe add brackets around i%3 to be more clear
      // JS can use == and === for equivalence
      // === is better as it also checks for type

      // to check if something is a multiple we see if modulus returns 0

      array.push("FizzBuzz");
      // arrays in JS have the built in push method that
      // add to the end of the array
    } else if (i % 3 == 0) {
      array.push("Fizz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }

  return array;
  // the keyword return is used to return a value from a function
}

console.log(fizzBuzz(1, 15));
// this is not the normal way used to print in JS
// but it is a way to print during testing and such
// that is because JS is normally used with browsers

/*
  
  
  This function checks if the string
  passed to it is a palindrome
  
  */

function isPalindrome(word) {
  // can do by going through half of the word and checking the position index
  // with length - the current position index
  // if we get one instance of not being the same we are done
  // if we finish and we never get false it is
  // a palindrome

  var check = word.toLowerCase();
  // might not be needed but good practice
  // strings in JS have the built in toLowerCase() method
  // that make the characters in the string lowercase

  var len = check.length;
  // strings also have the built in length attribute
  // this returns the number of characters in the string

  for (var i = 0; i <= len / 2; ++i) {
    if (check[i] != check[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("apple"));

console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));

/*
  
  This is an iterative version of
  a binary search 
  you pass the function an array and a target
  it then searches the array for the target 
  
  */

function myBinarySearch(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  // 1 is subtracted from length as in JS arrays start from index 0

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    // Math.floor is an operation that rounds down

    if (nums[mid] == target) {
      return true;
    } else if (nums[mid] < target) {
      // left half of array has been eliminated
      // to access a value in an array we call the array and put the index we want to access
      // in square brackets

      start = mid + 1;
    } else if (nums[mid] > target) {
      // could just be else

      // should probably be else since there are no other possibilities
      // might cause an error

      // right half of the array has been eliminated

      end = mid - 1;
    }
  }

  return false;
}

numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myBinarySearch(numbs, 9));

console.log(myBinarySearch(numbs, 10));

/*
This function takes a string and puts its characters in a dictionary 
where the values are the number of times it appears

*/

function frequencyCounter(word) {
  const freqCounter = {};
  // JS has an object called a dictionary that stores key, value pairs

  var len = word.length;

  // could do -1
  //then would be <= len

  for (var i = 0; i < len; ++i) {
    if (freqCounter[word[i]] == null) {
      // wonder if ==0 will work
      // to access the value in the dictionary we call the dictionary and
      // pass the key in square brackets

      freqCounter[word[i]] = 1;
      // first time we see the letter
    } else {
      freqCounter[word[i]] = freqCounter[word[i]] + 1;
      // we have seen the letter before
    }
  }

  return freqCounter;
}

console.log(frequencyCounter("apple"));

// output

/*
  [
    1,          2,
    'Fizz',     4,
    'Buzz',     'Fizz',
    7,          8,
    'Fizz',     'Buzz',
    11,         'Fizz',
    13,         14,
    'FizzBuzz'
  ]
  false
  true
  false
  true
  false
  { a: 1, p: 2, l: 1, e: 1 }
  
  
    */
