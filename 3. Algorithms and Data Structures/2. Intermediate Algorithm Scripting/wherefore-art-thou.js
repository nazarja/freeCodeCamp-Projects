
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var arr2 =  collection.filter(function(value) {
      for (var i in source) {
        if(source[i] != value[i]) {
          return false;
        }
      }
      return true;
    });
   arr = arr2; 
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
