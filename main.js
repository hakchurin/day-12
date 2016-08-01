//Show me how to calculate the average price of all items.
//

var arrayPrice = items.map(function(item) {
    return item.price;
});

console.log(arrayPrice);

var numberOfItems = items.length;
var total = 0;

 arrayPrice.forEach(function(price) {
  total = price + total;
});
var average = total / numberOfItems;

document.querySelector('#answer1').textContent = average;



//     // Show me how to get an array of items that cost between $14.00 and $18.00 USD







var name = items.filter(function(priceRange) {
if (priceRange.price >= 14 && priceRange.price <= 18) {
return priceRange.price;
}}).map(function(item){
  return item.title;
});

console.log(name);



document.querySelector('#answer2').textContent = name;

// answer2.innerHTML += priceRange.title + '</br>';


// console.log(arrayName);
// var arrayCosts = items.filter(function(cost) {
//     return cost.price;
// });
// var finals = arrayCosts.map(function(currentItem) {
//   if (String(currentItem.arrayCosts > 14.00 && currentItem.arrayCosts < 18.00 ))
//     return arrayName;
//   });
//   console.log(finals);









// Which item has a "GBP" currency code? Display it's name and price.

    var currencyCode = items.filter(function(code) {
        return code.currency_code === "GBP";
    });

var nameOfItem = currencyCode.map(function(item){
    return item.price;
});


var nameofItem =  currencyCode.map(function(item){
  return item.title;
});

document.querySelector('#answer3').textContent = nameofItem;


//
// // Display a list of all items who are made of wood.
// //
//
// //
// //
// //
// //
var materialOfItem = items.filter(function(materials) {
    return materials.materials.indexOf('wood') !== -1;

});

var woodItem = materialOfItem.map(function(items) {

    return items.title;
});

document.querySelector('#answer4').textContent = woodItem;



//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.



//
//
var matItem = items.filter(function(price){

    return price.materials.length >= 8;
  });

var nameOfItem = matItem.map(function(price){
    return price.title;
});

var numberOfItem = matItem.map(function(price){
  return price.materials.length;
});

var madeOf = matItem.map(function(price){
    return price.materials;
});



document.querySelector('#answer5').textContent = madeOf;




//How many items were made by their sellers?



var itemList = items.filter(function(item){
  return item.who_made == 'i_did';
});

var numberItem = itemList.map(function(number){
  return number.item;

});
console.log(numberItem);

document.querySelector('#answer6').textContent = itemList.length + ' items were made by their sellers';;
