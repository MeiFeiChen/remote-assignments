// function twoSum(nums, target) {
//     let remainValue;
//     let checkIndex;
//     for (let i = 0 ; i < nums.length; i++) {
//         remainValue = target -  nums[i];
//         if (nums.includes(remainValue, i+1)) {
//             checkIndex = i + nums.slice(i+1).indexOf(remainValue) + 1
//             return [i, checkIndex];
//         }
//     }
// };


/**
 * Returns an array contains the indices of  two numbers that 
 * can add up to target.
 *
 * @param {array} nums - The array of numbers.
 * @return {array} An array contains the indices of two numbers.
 */
function twoSum(nums, target) {
    const checkValue = {};  // store val-index pairs 

    for (let i = 0 ; i < nums.length; i++) {
        // Check if the complement val exists in checkValue
        if (checkValue[target-nums[i]] !== undefined) {
            return [checkValue[target-nums[i]], i];
        } else {
            // add current val and index to checkValue
            checkValue[nums[i]] = i;
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 3], 6))
