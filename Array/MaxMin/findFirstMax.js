const input = [1, 2, 3, 4, 5];

const findFirstMax = (arr) => {
  let max = -Infinity; // +Infinity

  for (let i = 0; i < arr.length; i++) {
    // < symbol for firstMin
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findFirstMax(input));

// Time: O(n)
// Space: O(1)
