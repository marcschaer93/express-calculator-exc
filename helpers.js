function findMean(nums) {
  let sum = nums.reduce((accu, next) => {
    return accu + next;
  }, 0);

  let average = sum / nums.length;
  console.log("averageFunction:", average);
  return average;
}

function findMedian(nums) {
  nums.sort((a, b) => a - b);
  let middleIndex = Math.floor(nums.length / 2);

  let median;

  if (nums.length % 2 === 0) {
    median = nums[middleIndex] + nums[middleIndex - 1];
  } else {
    median = nums[middleIndex];
  }
  return median;
}

function findMode(nums) {
  nums.sort((a, b) => a - b);
  let numberCounter = {};
  let maxCount = 0;
  let mode = null;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (numberCounter[num] !== undefined) {
      numberCounter[num]++;
    } else {
      numberCounter[num] = 1;
    }

    // Check if the current number's count is greater than the current maximum count
    if (numberCounter[num] > maxCount) {
      maxCount = numberCounter[num]; // Update the maximum count
      mode = num;
    }
  }

  console.log("mode", mode);
  return mode;
}

function convertAndValidateNums(numsString) {
  let numsStringsArray = numsString.split(",");
  console.log("numsStringsArray:", numsStringsArray);

  let numsArray = numsStringsArray.map(Number);
  console.log("numsArray:", numsArray);

  for (let i = 0; i < numsArray.length; i++) {
    if (isNaN(numsArray[i])) {
      return new Error(
        `The value "${numsArray[i]}" at index ${i} is not a valid number.`
      );
    }
  }

  return numsArray;
}

module.exports = {
  findMean,
  findMedian,
  findMode,
  convertAndValidateNums,
};
