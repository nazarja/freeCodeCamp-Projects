
function convertHTML(str) {
  // &colon;&rpar;
  
  var regex = /\W\/*/g;
  
  var convert = str.replace(regex,function(char) {
    
    switch(char) {
      case '&':
        return '&amp;';
      case ' ':
        return ' ';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
    
  });
  
  return convert;
}

convertHTML("Dolce & Gabbana");
