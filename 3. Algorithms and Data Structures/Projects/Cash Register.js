
function checkCashRegister(price, cash, cid) {
  
  var valueOfFloatItems = [10000,2000,1000,500,100,25,10,5,1];
  var floatItemCount = 0;
  var change = (cash - price) * 100;
  var changeLeft = change;
  var till = cid.reverse();
  var returnArr = [];
  var float = 0;
  var count = 0;
  
  
  // get total amount of money in till
  cid.forEach(function(money) {
    float += money[1] * 100; 
  });
  // return if change and till float are the same
  if (change == float) {
    return 'Closed';
  }
  // return if not enough money to give back change
  if (change > float) {
    return 'Insufficient Funds';
  }
  // iterate over array to calculate change amounts
  till.forEach(function(item) {
    var name  = item[0];
    var amountAvailible = item[1] * 100;
    var valueOfItem = valueOfFloatItems[floatItemCount];
    var numAvailible = amountAvailible / valueOfItem;
    floatItemCount++;
    
    
    while ((changeLeft >= valueOfItem) && (numAvailible > 0)) {
      changeLeft -= valueOfItem;
      count++;
      numAvailible--;
    }
    
    if (count > 0) {
      returnArr.push([name , (count * valueOfItem) / 100]);
      count = 0;
    }
    
  });
  
  if (changeLeft !== 0) {
    return 'Insufficient Funds';
  }
  
  return returnArr;
}


checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
