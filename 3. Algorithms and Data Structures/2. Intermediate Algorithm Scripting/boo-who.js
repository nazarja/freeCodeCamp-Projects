
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  var boohoo = typeof bool;
  if (boohoo !== 'boolean') {
    return false;   
  }
  return true;
 
}

booWho(false);

// or 

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  return typeof bool === 'boolean';
 
}

booWho(false);
