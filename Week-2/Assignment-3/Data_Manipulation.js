
/**
 * Returns an object which shows the count of each character in the input array
 *
 * @param {array} input - The array of characters.
 * @return {object} An object which shows the count of each character
 */
function count(input) { 
    return input.reduce((obj ,ch) => {
        if (ch in obj) {
            obj[ch] ++;
        } else {
            obj[ch] = 1;
        }
        return obj;
    }, {})
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"]; 
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

/**
 * Returns an object which shows the total values of each character in the input array
 *
 * @param {array} input - The array of objects with key representing characters and value presenting their values.
 * @return {object} An object which shows the total values of each character
 */
function groupByKey(input) { 
    return input.reduce((obj, item) => {
        if (item.key in obj) {
            obj[item.key] += item.value;
        } else {
            obj[item.key] = item.value;
        }
        return obj;
    }, {})
}

let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];

console.log(groupByKey(input2)); 
// should print {a:6, b:1, c:7}