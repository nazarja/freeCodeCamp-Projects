
function myReplace(str, before, after) {
  
  var isCapital = before.charCodeAt(0);
  var upper;
  
  if (isCapital < 90) {
     upper = after.charAt(0).toUpperCase();
     after = after.replace(after.charAt(0), upper); 
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
