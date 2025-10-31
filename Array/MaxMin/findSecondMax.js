const input = [1, 2, 3, 4, 5, 8, 7];

const findSecondMax = (arr) => {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      const temp = first;
      first = arr[i];
      second = temp;
    } else if (arr[i] < first && arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
};

console.log(findSecondMax(input));

const findSecondMin = (arr) => {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      const temp = first;
      first = arr[i];
      second = temp;
    } else if (arr[i] > first && arr[i] < second) {
      second = arr[i];
    }
  }
  return second;
};

console.log(findSecondMin(input));

// Time: O(n)
// Space: O(1)
