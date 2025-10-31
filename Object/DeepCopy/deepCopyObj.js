const object = {
  name: "hello",
  smallObj: {
    name: "world",
    value: "2",
  },
};

const deepCopyObj = (obj) => {
  let newObj = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      newObj[key] = deepCopyObj(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

console.log(deepCopyObj(object));
