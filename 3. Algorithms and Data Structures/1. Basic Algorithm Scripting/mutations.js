
function mutation(arr) {
  
  var word = arr[0].toLowerCase();
  var check = arr[1].toLowerCase();
 
  
  for (var i = 0; i < check.length; i++)
    {
      if (word.indexOf(check[i]) < 0)
        {
          return false;
        }
    }
   return true;

}

mutation(["Mary", "Aarmy"]);
