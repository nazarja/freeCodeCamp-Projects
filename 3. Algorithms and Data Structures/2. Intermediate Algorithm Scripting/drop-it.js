
function dropElements(arr, func) {
  // Drop them elements.
  
  var newArr;
  
  var index = arr.findIndex(func);
  
  if (index == -1) {
    newArr = [];
    return newArr;
  }
  else {
    newArr = arr.slice(index);
    return newArr;
  }
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5; });
