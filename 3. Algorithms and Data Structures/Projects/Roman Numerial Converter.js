var arabic = [1,  4,   5,   9,    10,  40,   50,  90,  100,  400,  500,  900,  1000];
var roman = ["I","IV","V", "IX", "X", "XL", "L", "XC", "C",  "CD", "D",  "CM", "M"];

function convertToRoman(num) {
  
  var number = num;
  var romanNum = '';
  var minus = '';
  var numerial = '';
  
  function iterate()  {
  
      for (var i = 0; i < arabic.length; i++) {
          
        if (number >= arabic[i]) {
            minus = arabic[i];
            numerial = roman[i];
          }            
      }
      romanNum += numerial;
      number -= minus;
  }

 while (number !== 0) {
   iterate();
 }
  
  return romanNum;
}


convertToRoman(2999);