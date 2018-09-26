
function truthCheck(collection, pre) {
  // Is everyone being true?
  
  var bingo = 0;
  
  for (var i in collection) {
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      bingo += 1;
     }
  }
  
  return bingo == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

function truthCheck(collection, pre) {
// or function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");