
function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  var newArray = arr.reduce(function(a,b) {
    return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
  }, [] );
  
  return newArray;
}

steamrollArray([1, {}, [3, [[4]]]]);