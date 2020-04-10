//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

const loopNWhile = function(n) {
  while (n >= 0) {
    console.log(`n is ${n}`)
    n--
  }
}


//2. Next, try looping just like above except using recursion

const loopN = function(n) {
  if (n === 0) {
    return;
  } else {
    return loopN(n-1)
  }
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

const exponent = function(base, expo) {
  let val = base;
  while (expo > 1) {
    val *= base;
    expo --
  }

  return val;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

const exponentRecursive = function(base, expo) {
  if (expo === 1) {
    return base; 
  } else {
    return base * exponentRecursive(base, (expo - 1))
  }
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

const recursiveMultiplier = function(arr, num) {
  if(arr.length === 0){
    return arr;
  }

  var last = arr.pop();

  recursiveMultiplier(arr, num);

  arr.push(last * num);

  return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

const recursiveReverse = function(arr) {
  let returnArr = [];

  const addItems = function(orderedArr) {
    if (orderedArr.length > 0) {
      returnArr.push(orderedArr.pop())
      addItems(orderedArr)
    } else {
      return
    }
  }

  addItems(arr)

  return returnArr;
}