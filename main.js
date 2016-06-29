//Show me how to calculate the average price of all items.
//
//
// var arrayPrice = items.map(function(item) {
//     return item.price;
// });
//
// var numberOfItems = items.length;
// var total = 0;
//
//  arrayPrice.forEach(function(price) {
//   total = price + total;
// });
// var average = total / numberOfItems;
//
//
//
//
//
//     // Show me how to get an array of items that cost between $14.00 and $18.00 USD
//     var arrayName = items.filter(function(name) {
//         return name.title;
//     });
//     var arrayCosts = items.filter(function(cost) {
//         return cost.price;
//     });
//     var finals = arrayCosts.map(function(currentItem) {
//       if (String(currentItem.arrayCosts > 14.00 && currentItem.arrayCosts < 18.00 ) {
//         return arrayName;
//   }
// });
// console.log(finals);
// if (currentItem.arrayName > 1979 && < 1980 ) {
//   return true
// }
//return String(arrayName).indexOf('14.00 <= 18.00');
//if String(currentItem.arrayName).indexOf('14.00'){



    // Which item has a "GBP" currency code? Display it's name and price.

//     var currencyCode = items.map(function(code) {
//         return code.currency_code;
//     });
//
// var nameOfItem = currencyCode.name;
//
// var names = 'GBP';
// var titles = currencyCode.filter(function (title) {
//     return title === name;
// });





    // Display a list of all items who are made of wood.

    var Woods = items.filter(function(wood) {
        return wood.materials;
    });

    var nameOfItem= materials;

var material = materials.name;

    // var titles = Woods.filter(function (title) {
    //   return title == material;
    // });
var itemsMadeOfWood = items.filter(function(items){
if (items.materials.indexOf('wood')!== -1) {

  return nameOfItem;
}
});

console.log(itemsMadeOfWood);


//
// console.log(titles);


//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

//How many items were made by their sellers?
