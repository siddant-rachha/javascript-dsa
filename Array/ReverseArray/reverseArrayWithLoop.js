const input = [1, 2, 3, 4, 5];

const reverseArrayWithLoop = (inputArr) => {
  const arrLength = inputArr.length;
  const reversedArr = [];
  for (let i = arrLength - 1; i >= 0; i--) {
    reversedArr.push(inputArr[i]);
  }
  return reversedArr;
};

console.log(reverseArrayWithLoop(input)); // same for finding min

// Time: O(n)
// Space: O(n)
