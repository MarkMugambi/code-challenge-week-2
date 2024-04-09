const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function swapCase(str) {
  var swappedStr = '';
  // Loop through every character in the input string
  for (var i = 0; i < str.length; i++) {

    // Extract the current character
    var char = str.charAt(i);

    // Check if the character is uppercase
    if (char === char.toUpperCase()) {
      // Convert the uppercase character to lowercase
      swappedStr += char.toLowerCase();
    } else {
      // Convert the lowercase character to uppercase 
      swappedStr += char.toUpperCase();
    }
  }
  // Return the string with swapped cases
  return swappedStr;
}

async function main() {
  readline.question("Enter a string to swap cases: ", (input) => {
    const output = swapCase(input);
    console.log("Swapped Case:", output);
    readline.close();
  });
}

main();