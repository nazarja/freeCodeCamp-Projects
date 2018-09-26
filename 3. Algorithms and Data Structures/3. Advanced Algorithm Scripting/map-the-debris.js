
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var array = [];
  
  arr.forEach(function(item) {
    
  var name = item.name;
  var alt = item.avgAlt;
  var orbPer =  Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + alt, 3) / GM));
  array.push({name: name, orbitalPeriod: orbPer});
  });  
  
  return array;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
