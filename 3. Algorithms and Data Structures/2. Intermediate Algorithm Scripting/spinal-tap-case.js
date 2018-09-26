
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var regexS = /\s+|_+/g;
  var regexU = /([a-z])([A-Z])/g;
  str = str.replace(regexU, '$1 $2');
  str =  str.replace(regexS, '-').toLowerCase();
  return str;
}

spinalCase('thisIsSpinalTap');

// or 


function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s+|_+/g, '-').toLowerCase();
}

spinalCase('thisIsSpinalTap');

