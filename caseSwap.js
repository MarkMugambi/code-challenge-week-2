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
    // Return the string with swappedv cases
    return swappedStr;
}
var input = 'The Quick Brown Fox';
var output = swapCase(input);
console.log(output); // Output: 'tHE qUICK bROWN fOX'
