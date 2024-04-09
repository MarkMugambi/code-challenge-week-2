function generateArray(start, end) {

    var arr = [];
    // Check if the start value is less than or equal to the end value
    if (start <= end) {
        for (var i = start; i <= end; i++) {
    // Push every numebr from start to end into the array
            arr.push(i);
        }
    } else {
    // If the start is grater than end, generate descending array
        for (var j = start; j >= end; j--) {
            arr.push(j);
        }
    }
    // Return the generated array
    return arr;
}

console.log(generateArray(4, 7)); 
console.log(generateArray(-4, 7)); 