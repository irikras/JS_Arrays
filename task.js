function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length === arr2.length) && (arr1.every((val, index) => val === arr2[index]));
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter(val => val > 0).filter(val => val % 3 === 0).map(val => val * 10);
  return resultArr; // array
}
