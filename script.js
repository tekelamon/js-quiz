function checkAnswer(questionNumber) {
    console.log({questionNumber})
    const answer = document.getElementById(`q${questionNumber}`).value;
    let result;
    switch (questionNumber) {
      case 1:
        result = largerNumber(4, 7) === 7;
        break;
      case 2:
        result = isPalindrome("racecar") === true;
        break;
      case 3:
        result = sumEvenNumbers([1, 2, 3, 4, 5, 6]) === 12;
        break;
      case 4:
        result = startsWithVowel(["apple", "banana", "orange"]) === ["apple", "orange"];
        break;
      case 5:
        result = areAnagrams("listen", "silent") === true;
        break;
      case 6:
        result = average([1, 2, 3, 4, 5, 6]) === 3.5;
        break;
      case 7:
        result = isValidEmail("test@example.com") === true;
        break;
      case 8:
        result = isDivisibleBy(10, 2) === true;
        break;
      case 9:
        result = findPalindromes(["racecar", "hello", "level", "world"]) === ["racecar", "level"];
        break;
      case 10:
        result = countWords("The quick brown fox jumps over the lazy dog") === 9;
        break;
    }
    document.getElementById(`q${questionNumber}-answer`).textContent = result === true ? "Correct!" : "Incorrect. Try again!";
    document.getElementById(`q${questionNumber}-answer`).style.display="block"
  }
  
  function largerNumber(a, b) {
    // Starter code for Question 1
    return a > b ? a : b;
  }
  
  function isPalindrome(str) {
    // Starter code for Question 2
    
    // take the length of the word
    // compare the first letter to the last and see if they match
    // continue until midpoint
    // if any space does not match, return false

    let end = str.length - 1;

    // from beginning to halfway
    for(let start = 0; start < str.length / 2; start++ ) {
      // compare to end offset by how far we've traveled
      if( str[start] !== str[ end - start ] ) {
        return false;
      }
    }
    return true;
  }

  function sumEvenNumbers( nums ) {
    // Starter code for Question 3

    // check if num is even
    // if it's even, add to sum

    let sum = 0;

    for( let i in nums ) {
      if( nums[i] % 2 == 0 ) {
        sum += nums[i];
      }
    }

    return sum;
  }
  
  function startsWithVowel(strs) {
    // Starter code for Question 4
    const vowels = ["a", "e", "i", "o", "u"];
    let result = [];

    // check each string in array
    // compare first letter to vowels
    // if they match
      // add string to result

    for( let s in strs ) {
      for( let v in vowels ) {
        // if the first letter is found in list of vowels
        if( strs[s][0] == vowels[v] ) {
          result.push( strs[s] );
        }
      }
    }

    return result;
  }
  
  function areAnagrams(str1, str2) {
    // Starter code for Question 5
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }
  
  function average(numbers) {
    // Starter code for Question 6
    // check if array is empty
    if ( numbers.length == 0 ) { return 0; }

    // sum each number in array
    let sum = 0;
    for( let i in numbers ) {
      sum += numbers[i];
    }
    
    return sum / numbers.length;
  }
  
  function isValidEmail(email) {
    // Starter code for Question 7

    // check for @ in email
      // if there's an @ check for '.com'
    // if theres a valid email return true

    for( let c in email ) {
      if( email[c] === '@' ) {
        return email.substring( email.length - 4, email.length ) == '.com';
      }
    }
    return false;
  }
  
  function isDivisibleBy(num1, num2) {
    // Starter code for Question 8
    if(num2 == 0) { return "Cannot divide by 0"; }
    return num1 % num2 == 0;
  }
  
  function findPalindromes(strings) {
    // Starter code for Question 9
    
    // for every string given
    // check if it's a palindrome
    // if it is, add to array
    // return array

    let result = [];

    for( let s in strings ) {
      if( isPalindrome( strings[s] ) ) {
        result.push( strings[s] );
      }
    }

    return result;
  }
  
  function countWords(str) {
    // Starter code for Question 10    

    // for each char in str
      // check if its a letter or space
      // for each space
        // increase words found

    // ensure string is not empty
    if( str.length == 0 ) { return 0 ; }

    let words = 1;

    for( c in str ) {
      if( str[c] === ' ' ) {
        words++;
      }
    }

    return words;
  }