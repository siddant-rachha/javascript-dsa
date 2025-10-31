const input = [1, 2, 3, 4, 5, 6, 7, 1];
const sum = 5;

const findAllSumPairs = (arr, sum) => {
  const obj = {};
  const pairs = [];

  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i];

    // check if target exists
    if (obj[target]) {
      pairs.push([target, arr[i]]);

      // delete
      if (obj[target] === 1) {
        obj[target] = undefined;
      } else {
        obj[target]--;
      }
    }
    // if not, add
    else {
      if (obj[arr[i]]) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      }
    }
  }

  return pairs;
};

console.log(findAllSumPairs(input, sum));
