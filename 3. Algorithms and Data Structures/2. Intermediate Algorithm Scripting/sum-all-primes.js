function sumPrimes(num) {
  
  var arr = [];
  var prime = [];
  var limit =  Math.sqrt(num);
  var sum;
  
  
  // make array up to *num
  for (var i = 0; i <= num; i++) {
    arr.push(true);
  }
  
  // set multiples of primes to false
  for (var j = 2; j <= limit; j++) {
    if(arr[j]) {
      for(var k = j * j; k <= num; k += j) {
        arr[k] = false;
      }
    }
  }
  
  // make array with only primes
  for (var l = 2; l <= num; l ++) {
    if(arr[l]) {
      prime.push(l);
    }
  }
    
  sum = prime.reduce(function(a,b) {
          return a + b;
        });
  
  return sum;
}

sumPrimes(10);
