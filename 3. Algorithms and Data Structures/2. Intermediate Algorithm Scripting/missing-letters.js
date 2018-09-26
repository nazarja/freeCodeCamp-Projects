
function fearNotLetter(str) {
  
  var currentLetter;
  var previousLetter;

  
  for (var i = 0; i < str.length; i++) {
    
    currentLetter = str.charCodeAt(i);
    
    if (i > 0) {
      if(currentLetter - 1 !== previousLetter) {
        return String.fromCharCode(currentLetter -1);
      }
    }
    previousLetter = currentLetter;
  }
  return undefined;
}

fearNotLetter("abce");
