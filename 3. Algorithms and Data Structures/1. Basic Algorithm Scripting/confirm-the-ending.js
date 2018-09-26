

function confirmEnding(str, target) {
  // get length of target
  var len = target.length;
  // turn length number into negetive number
  var neg = len - len -len;
  // get last nth chars of str
  var sub = str.substr(neg);
  // compare nth chars to target
  if (target === sub)
    {
      return true;
    }
   return false;

}

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}


confirmEnding("Bastian", "n");

