
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
   arr1.forEach(function(array1) {    
     var count = 0;
     arr2.forEach(function(array2) {
       // update stock amounts
       if (array2[1] == array1[1]) {
         array2[0] += array1[0];
         count++;
       }
     });
     
     // create a single array of unique items
     if (count === 0) {
         arr2.push(array1);
       }
   });
  
   arr2.sort(function(a,b) {
    return a[1] > b[1];
  });
  
  return arr2;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);