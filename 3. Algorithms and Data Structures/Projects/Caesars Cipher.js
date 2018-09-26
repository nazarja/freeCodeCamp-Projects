
function rot13(str) { // LBH QVQ VG!
  // declare array for str
  var arr = [];
  // iterate through array
  for (i = 0; i < str.length; i++)
    {
      // convert letters to integer value
      arr[i] = str[i].charCodeAt();
      
      // check value and apply swap and change back to letter
      if (arr[i] >= 65 &&  arr[i] <= 77) 
        {
          arr[i] += 13;
          arr[i] = String.fromCharCode(0 + arr[i]);
        }
      else
      if (arr[i] >= 78 &&  arr[i] <= 90) 
        {
          arr[i] -= 13;
          arr[i] = String.fromCharCode(0 + arr[i]);
        }
      else
        {
          arr[i] = String.fromCharCode(0 + arr[i]);
        }
      
    }
  // rejoin array to string
  var res = arr.join('');
  // return result
  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

