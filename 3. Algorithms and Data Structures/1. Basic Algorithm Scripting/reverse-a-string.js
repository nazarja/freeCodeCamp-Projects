function reverseString(str) {
  var arr = [];
  arr = str.split('');
  arr = arr.reverse();
  arr = arr.join('');

  return arr;
}

reverseString("hello");
