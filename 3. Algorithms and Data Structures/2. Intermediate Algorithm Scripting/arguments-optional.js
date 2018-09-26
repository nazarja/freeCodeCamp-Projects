
function addTogether() {
  
  if(arguments.length > 1) {
  // pass aruments into an array 
  var arr =  [...arguments];
    
    // checks if is a valid number
  for (var i = 0; i < arr.length; i++) {
    var isNumber = typeof arr[i];
    if(isNumber != 'number') {
      return undefined;
    }
  }
  
  // adds two numbers together
  return arr[0] + arr[1];
    
  }
  else {
    
      var a = arguments[0];
      if(typeof a != 'number') {
        return undefined;
      }
    
      return function(b) {
        
        if(typeof b == 'number') {
        return a + b;
        }
        else {
          return undefined;
        }
      };
      
  }
  
}

addTogether(2);
