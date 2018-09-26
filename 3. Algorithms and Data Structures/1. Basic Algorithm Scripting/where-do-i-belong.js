
function getIndexToIns(arr, num) {
  // push num onto array
  arr.push(num);
  // compare numbers while sorting
  arr.sort(function(a, b)
  {
   return a - b; 
  });
  // get index of num
  var res = arr.indexOf(num);
  
  return res;
}
  
getIndexToIns([10, 20, 30, 40, 50], 35);
