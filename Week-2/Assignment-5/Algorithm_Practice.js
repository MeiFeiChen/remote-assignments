// Recursion
function binarySearchHelper(numbers, target, start, end) {
    // find the midpoint
    midIndex = parseInt((start + end) / 2);
    if (numbers[midIndex] == target) return midIndex;

    // target not found in the array of numbers
    if (end <= start) return -1;
    else {
        if (numbers[midIndex] > target) {
            // if target is smaller than the middle element, move end to mid-1,
            end = midIndex - 1;
        } else {
             // if target is greater than the middle element, move start to mid+1,
            start = midIndex + 1;
        }
        return binarySearchHelper(numbers, target, start, end);
    }
}
function binarySearchPositionRecursion(numbers, target) { 
    return binarySearchHelper(numbers, target, 0, numbers.length);
}


// while loop
function binarySearchPosition(numbers, target) {
    let start = 0;
    let end = numbers.length;
    let midIndex;
    let count = 0
    while (start <= end) {
        midIndex = parseInt((start + end)/2);
        if (numbers[midIndex] == target) return midIndex;
        else if (numbers[midIndex] > target) {
            end = midIndex -1 ;
        } else {
            start = midIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearchPositionRecursion([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPositionRecursion([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3

