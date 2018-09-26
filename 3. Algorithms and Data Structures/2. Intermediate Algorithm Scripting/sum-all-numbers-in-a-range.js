function sumAll(arr) {
  
  var fullArr = [];
  
  for (var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
      fullArr.push(i);
  }
  
  var sumArr = fullArr.reduce(function(a,b) {
    return a + b;
  });
  return sumArr;
  
}

sumAll([5, 10]);

//  or 

function sumAll(arr) {
  
  var sum = 0;
  for (var i = Math.min(arr[0],arr[1]); i <= Math.max(arr[0],arr[1]); i++) {
      sum += i;
  }
  
  return sum;
  
}

sumAll([5, 10]);

//  or 

function sumAll(arr) {
  
  var sum = 0;
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
  }
  
  return sum;
  
}

sumAll([5, 10]);