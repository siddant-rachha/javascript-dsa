const input = [1, 2, 3, 4, 5, 6, 7];
const sum = 5;

const hasPairSum = (arr, sum) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i];
    if (obj[target]) {
      return true;
    }
    obj[arr[i]] = arr[i];
  }
  return false;
};

console.log(hasPairSum(input, sum));

// Time: O(n)
// Space: O(n)
