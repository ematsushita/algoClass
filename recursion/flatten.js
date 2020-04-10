/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

const flatten = function(arr) {
  let returnArr = [];
  for (let item of arr) {
    if (!Array.isArray(item)){
      returnArr.push(item)
    } else {
      returnArr = returnArr.concat(flatten(item))
    }
  }
  return returnArr;
}