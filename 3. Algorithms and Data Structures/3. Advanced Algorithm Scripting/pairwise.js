
function pairwise(arr, arg) {
  
  var newArr = [];
  
  if(arr.length === 0) {
    return 0;
  }

 for(var i =  0; i < arr.length; i++) {

   var one = arr[i];
   var indexOne = arr.indexOf(one);

   for(var j = i+1; j < arr.length; j++) {
     
     arr[i] = NaN;
     var two = arr[j];
     var indexTwo = arr.indexOf(two);

       if(one + two === arg) {
         newArr.push(indexOne , indexTwo);
         arr[j] = NaN;
         break;
       }
   }
   
 }

  // add together items in newArr for the answer  
  return newArr.reduce(function(a,b) {
     return a + b;
   });
}

pairwise([1, 1, 1], 2);