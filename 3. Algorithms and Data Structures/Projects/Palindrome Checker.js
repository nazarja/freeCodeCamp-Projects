function palindrome(str) {
  
  // first convert str to lowercase
  var lower = str.toLowerCase();
  
  // put string into an array
  var arr1 = [];
  arr1 = lower.split('');
  
  // iterate through array and push only alpha into new arrays
  // str1 will stay normal
  // str2 will be reversed 
  var str1 = [];
  var str2 = [];
  
  for (i = 0; i < arr1.length; i++)
    {
      if (arr1[i] >= 'a' && arr1[i] <= 'z')
        {
          str1.push(arr1[i]);
          str2.push(arr1[i]);
        }
      if (arr1[i] >= '0' && arr1[i] <= '9')
        {
          str1.push(arr1[i]);
          str2.push(arr1[i]);
        }
      
    }
  
  // join together array, reverse str2 and join array
  str1 = str1.join('');
  str2 = str2.reverse();
  str2 = str2.join('');
  
  // compare both strings 
  if (str1 === str2)
    {
      return true;
    }
  return false;

}



palindrome("1 eye for of 1 eye.");

