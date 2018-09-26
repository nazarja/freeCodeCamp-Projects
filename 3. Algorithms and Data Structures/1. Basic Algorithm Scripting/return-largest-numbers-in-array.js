
function largestOfFour(arr) {
  
  // array to return
  var nums = [];
  
  // iterate through each sub array
  for (var i = 0; i < arr.length; i++)
    {
      var big = 0;
      
      for (var j = 0; j < arr[i].length; j++)
        {
          var cur = arr[i][j];
          
          if (cur > big)
          {
            big = cur;
          }
          
        }
      
      nums.push(big);
    }
  return nums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

