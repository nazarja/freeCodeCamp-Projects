
function permAlone(str) {
  
  var string = str;
  
  function allPerms(string) {
    
    var combinations = [];

    if(string.length === 1) {
      combinations.push(string);
    }

    for(var i = 0; i < string.length; i++) {

      var char = string[i];
      var others = string.slice(0, i) + string.slice(i+1);
      var recursion = allPerms(others);

      for(var j = 0; j < recursion.length; j++) {
        var test = combinations.push(char + recursion[j]);

      }
    }
  
    return combinations;
  }
  var array =  allPerms(string);
  
  var count = 0;
  var length = array.length;
  var regex = /(\w)\1/;
  var newArr = [];
  
  
  for(var k = 0; k < array.length; k++) {
    if (!regex.test(array[k])) {
      newArr.push(array[k]);
    }
  }
  
  return newArr.length;
}

permAlone('aab');
