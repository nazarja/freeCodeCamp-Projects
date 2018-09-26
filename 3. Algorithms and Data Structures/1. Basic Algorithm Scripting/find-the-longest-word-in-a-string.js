function findLongestWord(str) {
  
  // split str into seperate strings in an array
  var arr= [];
  arr = str.split(' ');
  
  // count each array element and track biggest length
  var count1 = 0;
  var count2 = 0;
  
  for (var i = 0; i < arr.length; i++)
    {
      for (var j = 0; j < arr[i].length; j++)
        {
          count1++;
        }
      if (count1 > count2)
        {
          count2 = count1;
        }
      count1 = 0;
    }
  
  
  return count2;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

