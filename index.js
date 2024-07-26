function isPalindrome(word) {
  // Convert the word to lowercase to handle case insensitivity (optional)
  word = word.toLowerCase();

  // Compare the word with its reverse
  return word === word.split("").reverse().join("");
}

/* 
  Pseudocode:
  1. Convert the word to lowercase (optional, for case insensitivity).
  2. Reverse the word by:
    a. Splitting the word into an array of characters.
    b. Reversing the array.
    c. Joining the reversed array back into a string.
  3. Check if the original word is equal to the reversed word.
  4. Return true if they are equal, otherwise return false.
*/

/*
  Written explanation:
  The function `isPalindrome` checks if the given word is a palindrome. First, it converts the word to lowercase (this step is optional and depends on whether you want the palindrome check to be case insensitive). Then, it reverses the word by splitting it into an array of characters, reversing the array, and joining the array back into a string. Finally, it compares the original word with the reversed word. If they are the same, it returns true; otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
