const input = [1, 2, 3, 4, 5, 6, 7];
const k = 1;

const rightRotateArray = (arr, k) => {
  let rotate = k % arr.length;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const newIndex = (i + rotate) % arr.length;

    newArr[newIndex] = arr[i];
  }

  return newArr;
};

console.log(rightRotateArray(input, k));

const leftRotateArray = (arr, k) => {
  let rotate = k % arr.length;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let newIndex = i - rotate;

    if (newIndex < 0) {
      newIndex = arr.length + newIndex;
    }

    newArr[newIndex] = arr[i];
  }

  return newArr;
};

console.log(leftRotateArray(input, k));

// Time: O(n)
// Space: O(n)
