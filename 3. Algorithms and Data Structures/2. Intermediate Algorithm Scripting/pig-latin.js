
function translatePigLatin(str) {
  
  var arrVowels = [97,101,105,111,117]; 
  var suffixVowel = 'way';
  var isVowel = str.charCodeAt(0);
  var count = 0;
  
    for (var k = 0; k < arrVowels.length; k++) {
      if (arrVowels[k] == isVowel) {
          str += suffixVowel;
          return str;
      }
    }
  
  for (var i = 1; i < str.length; i++) {
    var letter = str.charCodeAt(i);
    
    for(var j = 0; j < arrVowels.length; j++) {
      if(letter == arrVowels[j]) {
        
        if (count !== 0) {
          break;
        }
        else {
          count = i;
        }
        
      }
    }
  }
  
  var moveConsts = str.slice(0, count);
  var suffixConst = moveConsts +'ay';
  str = str.slice(count, str.length) + suffixConst;
  
  return str;
}
translatePigLatin("glove");
// or 


function translatePigLatin(str) {
  
  var index = str.search(/[aeiou]/);
  
  if (index === 0) {
    return str + 'way';
  }
  else {
    return str.slice(index) + str.substr(0, index) + 'ay';
  }
  
}

translatePigLatin("consonant");

