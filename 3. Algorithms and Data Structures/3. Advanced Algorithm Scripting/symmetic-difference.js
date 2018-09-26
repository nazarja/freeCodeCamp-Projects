
function sym(args) {
  
  var arr = [].slice.call(arguments);
  
  function findDifference(arr1, arr2) {
  
      var single = [];
      
      arr1.forEach(function(item) {
        if(arr2.indexOf(item) == -1 && single.indexOf(item) == -1) {
          single.push(item);
        }
      });
            
      arr2.forEach(function(item) {
        if(arr1.indexOf(item) == -1 && single.indexOf(item) == -1) {
          single.push(item);
        }
      });
 
      return single.sort();
 
  }
  
  return arr.reduce(findDifference, []);

}

sym([1, 2, 3], [5, 2, 1, 4]);