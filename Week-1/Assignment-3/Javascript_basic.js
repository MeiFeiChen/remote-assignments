// count how many ‘a’ and ‘b’ letters are in the given input and return the total number
function countAandB(input) {
    return countAB = input.reduce((count, letter) => {
        if (letter === 'a' || letter === 'b') return count+1; 
        else return count;
    }, 0);
}

// convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on
function toNumber(input) {
    const numArray = input.map(letter => letter.charCodeAt(0) - 'a'.charCodeAt(0)+1);
    return numArray;
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']; 
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e']; 
console.log(countAandB(input2)); // should print 0 
console.log(toNumber(input2));  // should print [5, 4, 3, 4, 5]
