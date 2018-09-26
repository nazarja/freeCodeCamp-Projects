
function sumFibs(num) {
  
  var arr = [1,1];
  var sumAll = 0;
  var a = 1;
  var b = 1;
  var sum;
  
  while (sumAll < num) {
    
    sumAll = a + b;
    
    a = b;
    b = sumAll;
    
    var isOdd = Boolean(sumAll  % 2 !== 0);
    
    if (isOdd === true) {
      arr.push(sumAll);
    }
    
    if(arr[arr.length-1] > num) {
       arr.pop(arr.length-1);
    }
    
    sum = arr.reduce(function(a,b) {
     return a + b; 
    });
    
  }
  
   return sum;
}

sumFibs(10);