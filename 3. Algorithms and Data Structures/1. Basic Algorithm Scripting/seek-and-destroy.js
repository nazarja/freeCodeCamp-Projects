
function destroyer(arr) {
  // Remove all the values
  var args =  [].slice.call(arguments);
  args.splice(0, 1);
  // create filter function 
  function filter(out)
  {
    return args.indexOf(out) == -1;
  }
  
  return arr.filter(filter);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

