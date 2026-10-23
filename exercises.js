// =====================================================================
//  Introduction to Programming - Exercise Battery
//
//  Topics: for/while loops, if/else, switch-case, functions,
//          arrays, objects, numbers, strings, booleans,
//          string concatenation
//
//  HOW TO WORK
//   1. Implement the functions below, one after another.
//   2. Run the file:      node exercises.js
//      (or open exercises.html in a browser and look at the page)
//   3. The test runner at the bottom shows which exercises pass.
//
//  RULES
//   Only use what we covered in class: for, while, if/else, switch,
//   functions, arrays (index access, .length, .push), objects and +
//   for strings. Do NOT use built-in helpers such as .split, .join,
//   .reverse, .filter, .map, .includes, .sort, .repeat or Math.max.
// =====================================================================

// ---------------------------------------------------------------------
// Exercise 1: sumOfEvens
// Return the sum of all even numbers in the array.
// An empty array gives 0.
//   sumOfEvens([1, 2, 3, 4]) -> 6
// ---------------------------------------------------------------------

/* ########## MY OWN DEBUGGING ## */
const my_debug = true;
function debug_info(exercise_txt) {
  if (my_debug) {
    console.log(exercise_txt);
  }
}

/* ############################## */
function sumOfEvens(numbers) {
  /*    ######### sum variable declaration
        ######### if input isn't a variable, use 0
        ######## count how many even numbers inside of array, for console.log warning
  */
  let sum = 0;
  let count_of_even_numbers = 0;
  debug_info("INFO [--Exercise 1--]: INPUT ARRAY: " + numbers);
  if (!Array.isArray(numbers)) {
    debug_info("WARNING [--Exercise 1--]: No array is given");
    //no array, return false
    return false;
  }
  if (numbers.length < 1) {
    //falls arra nur einen eintrag enthaelt, diesen retour geben
    //wertuebergabe nicht zusaetzlich notwendig,da die anschließende for-schleife den sten WErt vom Array einfach beibehaelt
    debug_info("INFO [--Exercise 1--]: Only one number in Array");
  } else {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        sum += numbers[i];
        count_of_even_numbers++;
      }
    }
    debug_info("INFO [--Exercise 1--]: SUM: " + sum);
    if (count_of_even_numbers == 0) {
      // info, if no even number is in array
      debug_info("INFO [--Exercise 1--]: no even number in array");
    }
  }
  return sum;
}

// ---------------------------------------------------------------------
// Exercise 2: dayName
// Use a switch statement to turn a day number into its name:
// 1 -> "Monday", 2 -> "Tuesday", ... 7 -> "Sunday".
// Any other number gives "Invalid".
//   dayName(3) -> "Wednesday"
// ---------------------------------------------------------------------
function dayName(dayNumber) {
  // weekday variable declaration
  const weekday = {
    0: "Invalid",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thuesday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  let current_day = "";

  if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
    debug_info("WARNING [--Exercise 2--]: No INT is given");
    dayNumber = 0;
  }

  //Switch state
  switch (dayNumber) {
    case 0:
      current_day = weekday[0];
      break;
    case 1:
      current_day = weekday[1];
      break;
    case 2:
      current_day = weekday[2];
      break;
    case 3:
      current_day = weekday[3];
      break;
    case 4:
      current_day = weekday[4];
      break;
    case 5:
      current_day = weekday[5];
      break;
    case 6:
      current_day = weekday[6];
      break;
    case 7:
      current_day = weekday[7];
      break;
    default:
      "invalid";
  }

  debug_info("INFO [--Exercise 2--]: " + current_day);
  return current_day;
}

// ---------------------------------------------------------------------
// Exercise 3: countVowels
// Count the vowels (a, e, i, o, u - upper or lower case) in the text.
// Use a switch statement to decide whether a character is a vowel.
// Hint: text[i] gives you the character at position i.
//   countVowels("Hello World") -> 3
// ---------------------------------------------------------------------
function countVowels(text) {
  //vowels declaration
  const vowels = ["a", "e", "i", "o", "u"];
  let sum_vowel = 0;

   debug_info("Info [--Exercise 3--]: INPUT: " + vowels);

  // check if text is str
  if (typeof text !== "string") {
    debug_info("Warning [--Exercise 3--]: NO String given");
    return sum_vowel;
  } else if (text === "") {
    debug_info("Warning [--Exercise 3--]: String is empty");
    return sum_vowel;
  }

  //convert text to lowercase, for non upper/lower sensitive search
   const low_text =  text.toLowerCase();


  for (let i = 0; i < low_text.length; i++) {
    switch (low_text[i]) {
      case vowels[0]:
        sum_vowel += 1;
        break;
      case vowels[1]:
        sum_vowel += 1;
        break;
      case vowels[2]:
        sum_vowel += 1;
        break;
      case vowels[3]:
        sum_vowel += 1;
        break;
      case vowels[4]:
        sum_vowel += 1;
        break;
      default:
        0;
    }
  }
  debug_info("Info [--Exercise 3--]: Count:" + sum_vowel);
  return sum_vowel;
}

// ---------------------------------------------------------------------
// Exercise 4: fizzBuzz
// Build ONE string with the numbers from 1 to n, separated by ", ".
// Multiples of 3 become "Fizz", multiples of 5 become "Buzz",
// multiples of both become "FizzBuzz". For n < 1 return "".
//   fizzBuzz(5) -> "1, 2, Fizz, 4, Buzz"
// ---------------------------------------------------------------------
function fizzBuzz(n) {}

// ---------------------------------------------------------------------
// Exercise 5: isPalindrome
// Return true if the word reads the same forwards and backwards.
// Use a while loop with one index starting at the front and one
// starting at the back. The empty string is a palindrome.
//   isPalindrome("level") -> true
// ---------------------------------------------------------------------
function isPalindrome(word) {}

// ---------------------------------------------------------------------
// Exercise 6: buildTriangle
// Build a triangle of "*" with the given height. Rows are separated
// by "\n" (no "\n" after the last row). Height 0 gives "".
//   buildTriangle(3) -> "*\n**\n***"
//   printed:  *
//             **
//             ***
// ---------------------------------------------------------------------
function buildTriangle(height) {}

// ---------------------------------------------------------------------
// Exercise 7: countWeekendDays
// Count how many of the day numbers are Saturday or Sunday.
// You MUST call your function dayName() from exercise 2 for this.
//   countWeekendDays([1, 6, 7, 3]) -> 2
// ---------------------------------------------------------------------
function countWeekendDays(dayNumbers) {}

// ---------------------------------------------------------------------
// Exercise 8: pointsToGrade
// Turn exam points (0-100) into a grade:
//   90-100 -> 1,  80-89 -> 2,  65-79 -> 3,  50-64 -> 4,  below 50 -> 5
//   pointsToGrade(85) -> 2
// ---------------------------------------------------------------------
function pointsToGrade(points) {}

// ---------------------------------------------------------------------
// Exercise 9: gradeReport
// The student is an object like { name: "Anna", points: 85 }.
// Return a text of the form  "Anna: 2 (Good)".
// Get the grade by calling pointsToGrade() and use a switch for the
// word: 1 Excellent, 2 Good, 3 Satisfactory, 4 Sufficient,
//       5 Insufficient
// ---------------------------------------------------------------------
function gradeReport(student) {}

// ---------------------------------------------------------------------
// Exercise 10: rockPaperScissors
// Each player chooses "rock", "paper" or "scissors".
// Return "Player 1 wins", "Player 2 wins" or "Draw".
// If any choice is not one of the three words, return "Invalid input".
// (rock beats scissors, scissors beats paper, paper beats rock)
//   rockPaperScissors("rock", "paper") -> "Player 2 wins"
// ---------------------------------------------------------------------
function rockPaperScissors(choice1, choice2) {}

// ---------------------------------------------------------------------
// Exercise 11: findOldest
// people is an array of objects like { name: "Tom", age: 31 }.
// Return the NAME of the oldest person. If two people have the same
// highest age, return the one that comes first. Empty array gives "".
// ---------------------------------------------------------------------
function findOldest(people) {}

// ---------------------------------------------------------------------
// Exercise 12: namesAtLeastAge
// Return a NEW array with the names of all people whose age is at
// least minAge, in the original order.
//   namesAtLeastAge([{ name: "Tom", age: 31 }, { name: "Eva", age: 12 }], 18)
//     -> ["Tom"]
// ---------------------------------------------------------------------
function namesAtLeastAge(people, minAge) {}

// ---------------------------------------------------------------------
// Exercise 13: cartTotal
// cart is an array of objects like { item: "Pen", price: 1.5, quantity: 4 }.
// Return the total price of the cart. If the quantity of one item is
// 10 or more, that item gets 10% discount.
//   cartTotal([{ item: "Pen", price: 2, quantity: 10 }]) -> 18
// ---------------------------------------------------------------------
function cartTotal(cart) {}

// ---------------------------------------------------------------------
// Exercise 14: isPrime
// Return true if n is a prime number (only divisible by 1 and itself).
// Numbers smaller than 2 are not prime. Use a while loop.
//   isPrime(7) -> true,  isPrime(9) -> false
// ---------------------------------------------------------------------
function isPrime(n) {}

// ---------------------------------------------------------------------
// Exercise 15: primesUpTo
// Return an array with all prime numbers from 2 up to n (inclusive).
// Call your function isPrime() from exercise 14.
//   primesUpTo(10) -> [2, 3, 5, 7]
// ---------------------------------------------------------------------
function primesUpTo(n) {}

// ---------------------------------------------------------------------
// Exercise 16: wordStatistics
// Words in the sentence are separated by one or more spaces (there may
// also be spaces at the start or end). Return an object:
//   { wordCount: <number of words>, longestWord: <longest word> }
// If two words are equally long, the first one wins.
// An empty sentence gives { wordCount: 0, longestWord: "" }.
//   wordStatistics("the quick brown fox")
//     -> { wordCount: 4, longestWord: "quick" }
// ---------------------------------------------------------------------
function wordStatistics(sentence) {}

// =====================================================================
// =====================================================================
//  TEST RUNNER - do not change anything below this line
// =====================================================================
// =====================================================================

let exercisesPassed = 0;
let exercisesTotal = 0;

function typeName(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

function isEqual(a, b) {
  if (typeName(a) !== typeName(b)) return false;
  if (typeof a === "number") return Math.abs(a - b) < 1e-9;
  if (Array.isArray(a)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!isEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (typeof a === "object") {
    const keysA = Object.keys(a);
    if (keysA.length !== Object.keys(b).length) return false;
    for (const key of keysA) {
      if (!isEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return a === b;
}

function show(value) {
  if (value === undefined) return "undefined";
  return JSON.stringify(value);
}

function padRight(text, width) {
  while (text.length < width) text = text + " ";
  return text;
}

function testExercise(title, fn, expectedType, cases) {
  exercisesTotal++;
  const messages = [];
  let checksPassed = 0;
  let notImplemented = false;

  for (let i = 0; i < cases.length; i++) {
    const testCase = cases[i];
    let call = fn.name + "(";
    for (let a = 0; a < testCase.args.length; a++) {
      if (a > 0) call = call + ", ";
      call = call + show(testCase.args[a]);
    }
    call = call + ")";

    let actual;
    try {
      actual = fn(...testCase.args);
    } catch (error) {
      messages.push(call + " crashed: " + error.message);
      continue;
    }

    if (actual === undefined && i === 0) {
      notImplemented = true;
      break;
    }
    if (typeName(actual) !== expectedType) {
      messages.push(
        call +
          " -> wrong return type: expected " +
          expectedType +
          ", got " +
          typeName(actual) +
          " (" +
          show(actual) +
          ")",
      );
    } else if (!isEqual(actual, testCase.expected)) {
      messages.push(
        call +
          " -> expected " +
          show(testCase.expected) +
          ", got " +
          show(actual),
      );
    } else {
      checksPassed++;
    }
  }

  const label = padRight(title, 26);
  if (notImplemented) {
    console.log("[TODO] " + label + "not implemented yet (returns undefined)");
  } else if (checksPassed === cases.length) {
    exercisesPassed++;
    console.log(
      "[PASS] " + label + checksPassed + "/" + cases.length + " checks",
    );
  } else {
    console.log(
      "[FAIL] " + label + checksPassed + "/" + cases.length + " checks",
    );
    for (const message of messages) {
      console.log("         " + message);
    }
  }
}

console.log("=================== RUNNING TESTS ===================");

testExercise("1. sumOfEvens", sumOfEvens, "number", [
  { args: [[1, 2, 3, 4, 5, 6]], expected: 12 },
  { args: [[]], expected: 0 },
  { args: [[1, 3, 5]], expected: 0 },
  { args: [[-2, 4, 7]], expected: 2 },
]);

testExercise("2. dayName", dayName, "string", [
  { args: [1], expected: "Monday" },
  { args: [3], expected: "Wednesday" },
  { args: [6], expected: "Saturday" },
  { args: [7], expected: "Sunday" },
  { args: [0], expected: "Invalid" },
  { args: [8], expected: "Invalid" },
]);

testExercise("3. countVowels", countVowels, "number", [
  { args: ["Hello World"], expected: 3 },
  { args: [""], expected: 0 },
  { args: ["AEIOU aeiou"], expected: 10 },
  { args: ["rhythm"], expected: 0 },
  { args: [1], expected: 0 },
]);

testExercise("4. fizzBuzz", fizzBuzz, "string", [
  { args: [5], expected: "1, 2, Fizz, 4, Buzz" },
  { args: [1], expected: "1" },
  { args: [0], expected: "" },
  {
    args: [15],
    expected:
      "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz",
  },
]);

testExercise("5. isPalindrome", isPalindrome, "boolean", [
  { args: ["level"], expected: true },
  { args: ["hello"], expected: false },
  { args: ["abba"], expected: true },
  { args: ["abca"], expected: false },
  { args: ["a"], expected: true },
  { args: [""], expected: true },
]);

testExercise("6. buildTriangle", buildTriangle, "string", [
  { args: [3], expected: "*\n**\n***" },
  { args: [1], expected: "*" },
  { args: [0], expected: "" },
  { args: [5], expected: "*\n**\n***\n****\n*****" },
]);

testExercise("7. countWeekendDays", countWeekendDays, "number", [
  { args: [[1, 6, 7, 3]], expected: 2 },
  { args: [[]], expected: 0 },
  { args: [[6, 6, 6]], expected: 3 },
  { args: [[8, 0, 7]], expected: 1 },
]);

testExercise("8. pointsToGrade", pointsToGrade, "number", [
  { args: [100], expected: 1 },
  { args: [90], expected: 1 },
  { args: [89], expected: 2 },
  { args: [80], expected: 2 },
  { args: [65], expected: 3 },
  { args: [64], expected: 4 },
  { args: [50], expected: 4 },
  { args: [49], expected: 5 },
  { args: [0], expected: 5 },
]);

testExercise("9. gradeReport", gradeReport, "string", [
  { args: [{ name: "Anna", points: 85 }], expected: "Anna: 2 (Good)" },
  { args: [{ name: "Ben", points: 95 }], expected: "Ben: 1 (Excellent)" },
  { args: [{ name: "Cleo", points: 70 }], expected: "Cleo: 3 (Satisfactory)" },
  { args: [{ name: "Dan", points: 50 }], expected: "Dan: 4 (Sufficient)" },
  { args: [{ name: "Emil", points: 12 }], expected: "Emil: 5 (Insufficient)" },
]);

testExercise("10. rockPaperScissors", rockPaperScissors, "string", [
  { args: ["rock", "paper"], expected: "Player 2 wins" },
  { args: ["rock", "scissors"], expected: "Player 1 wins" },
  { args: ["paper", "rock"], expected: "Player 1 wins" },
  { args: ["scissors", "rock"], expected: "Player 2 wins" },
  { args: ["scissors", "paper"], expected: "Player 1 wins" },
  { args: ["paper", "paper"], expected: "Draw" },
  { args: ["rock", "lizard"], expected: "Invalid input" },
  { args: ["well", "well"], expected: "Invalid input" },
]);

testExercise("11. findOldest", findOldest, "string", [
  {
    args: [
      [
        { name: "Tom", age: 31 },
        { name: "Eva", age: 45 },
        { name: "Max", age: 12 },
      ],
    ],
    expected: "Eva",
  },
  {
    args: [
      [
        { name: "Lea", age: 50 },
        { name: "Kim", age: 50 },
      ],
    ],
    expected: "Lea",
  },
  { args: [[{ name: "Solo", age: 1 }]], expected: "Solo" },
  { args: [[]], expected: "" },
]);

testExercise("12. namesAtLeastAge", namesAtLeastAge, "array", [
  {
    args: [
      [
        { name: "Tom", age: 31 },
        { name: "Eva", age: 12 },
        { name: "Max", age: 18 },
      ],
      18,
    ],
    expected: ["Tom", "Max"],
  },
  { args: [[{ name: "Tom", age: 31 }], 40], expected: [] },
  { args: [[], 18], expected: [] },
]);

testExercise("13. cartTotal", cartTotal, "number", [
  { args: [[{ item: "Pen", price: 2, quantity: 3 }]], expected: 6 },
  { args: [[{ item: "Pen", price: 2, quantity: 10 }]], expected: 18 },
  {
    args: [
      [
        { item: "Pen", price: 1.5, quantity: 4 },
        { item: "Paper", price: 3, quantity: 20 },
        { item: "Ink", price: 10, quantity: 1 },
      ],
    ],
    expected: 70,
  },
  { args: [[]], expected: 0 },
]);

testExercise("14. isPrime", isPrime, "boolean", [
  { args: [7], expected: true },
  { args: [9], expected: false },
  { args: [2], expected: true },
  { args: [1], expected: false },
  { args: [0], expected: false },
  { args: [97], expected: true },
  { args: [91], expected: false },
]);

testExercise("15. primesUpTo", primesUpTo, "array", [
  { args: [10], expected: [2, 3, 5, 7] },
  { args: [2], expected: [2] },
  { args: [1], expected: [] },
  { args: [30], expected: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] },
]);

testExercise("16. wordStatistics", wordStatistics, "object", [
  {
    args: ["the quick brown fox"],
    expected: { wordCount: 4, longestWord: "quick" },
  },
  {
    args: ["  hello   world "],
    expected: { wordCount: 2, longestWord: "hello" },
  },
  { args: ["hi"], expected: { wordCount: 1, longestWord: "hi" } },
  { args: [""], expected: { wordCount: 0, longestWord: "" } },
]);

console.log("=====================================================");
console.log("Exercises solved: " + exercisesPassed + " / " + exercisesTotal);
