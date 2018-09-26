
function bouncer(arr) {
  // all falsys are bools, filter bools, you filter falsys
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

