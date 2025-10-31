const input = [1, [2, 3], [4, [5, 6], 7], 8];

const flattenArray = (nestedArr) => {
  let arr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (!Array.isArray(nestedArr[i])) {
      arr.push(nestedArr[i]);
    } else {
      const resArr = flattenArray(nestedArr[i]);
      arr = [...arr, ...resArr];
    }
  }
  return arr;
};

console.log(flattenArray(input));
