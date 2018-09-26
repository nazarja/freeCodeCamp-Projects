
function chunkArrayInGroups(arr, size) {
  // array to return
  var arr2d = [];
 
  for (var i = 0; i < arr.length;)
    { 
     var push = arr.slice(i, i + size);
                arr2d.push(push);
                i += size; 
    }
  
  return arr2d;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

