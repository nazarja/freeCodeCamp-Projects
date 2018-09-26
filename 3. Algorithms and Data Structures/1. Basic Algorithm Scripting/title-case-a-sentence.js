
function titleCase(str) {
  
  // reduce all char to lowercase
  var words = str.toLowerCase().split(' ');
  
  // map and replace first char with upperCase
  var upperArry = words.map(function(val)
  {
       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());                 
  });
  
  // return and join with a space 
  return upperArry.join(' ');
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

