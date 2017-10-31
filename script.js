
//Blair Steen, LAB 10/18/2017

var groceryList = [
  {
    needToBuy: "apples",
    price: 6.22
  },
  {
    needToBuy: "crackers",
    price: 3.99
  },
  {
    needToBuy: "chesse",
    price: 8.06
  },
  {
    needToBuy: "wine",
    price: 23.98
  },
  ]
  
var totalPrice = 0
  
groceryList.forEach(function(item) {
    console.log(item.needToBuy, item.price);
    totalPrice += item.price;
});

console.log("Total: $" + totalPrice);
