
function pairElement(str) {
  
  var arr = [];
  
  for (var i = 0; i < str.length; i++) {
    
    var element = '';
    
    switch (str[i]) {
      case 'A':
        element = 'T';
        break;
      case 'T':
        element = 'A';
        break;
      case 'C':
        element = 'G';
        break;
      case 'G':
        element = 'C';
        break;
      default:
        element = 'Shit';
    }
    
    arr.push([str[i],element]);
  }
  return arr;
}

pairElement("GCG");
