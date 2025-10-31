const input = [1, 2, 3, 4, 5];

const reverseArrayInPlace = (inputArr) => {
  let left = 0;
  let right = inputArr.length - 1;

  while (left < right) {
    const leftValue = inputArr[left];
    const rightValue = inputArr[right];

    inputArr[left] = rightValue;
    inputArr[right] = leftValue;

    left++;
    right--;
  }

  return inputArr;
};

console.log(reverseArrayInPlace(input));

// Time: O(n)
// Space: O(1)
