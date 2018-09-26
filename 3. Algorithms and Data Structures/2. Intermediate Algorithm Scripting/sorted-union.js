function uniteUnique(arr) {
  
  var array = [];
  
  for (var i = 0; i < arguments.length; i ++) {
    array.push(arguments[i]);
  }

  array = array.reduce(function(a,b) {
     return a.concat(b);
    }, [] );
  
  array = array.filter(function(item, pos) {
            return array.indexOf(item) == pos;
         });
 

  
  return array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
