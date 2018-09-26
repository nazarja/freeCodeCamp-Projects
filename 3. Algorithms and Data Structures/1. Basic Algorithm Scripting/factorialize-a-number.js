function factorialize(num) {
  var arr = [];
  var sum = 1;
  for (var i = 1; i <= num; i++) {
    arr.push(i);
  }
  
  for (var j = 1; j <= num; j++) {
    sum = sum * j;
  }
  return sum;
}

factorialize(10);
