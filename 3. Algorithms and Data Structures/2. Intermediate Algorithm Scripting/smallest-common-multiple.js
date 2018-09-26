function smallestCommons(arr) {
  
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  var common = max;
  
  function commonMultiple(sum, min,max) {
    for(var i = min; i < max; i++) {
      if(sum % i !== 0){
        return false;
      }
    }
    return true;
  }
 
  while (!commonMultiple(common, min, max)) {
    common += max;
  }
  
  return common;    
}

smallestCommons([1,5]);
