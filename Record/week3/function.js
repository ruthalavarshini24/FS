let shoppingList = ["Milk", "Bread", "Eggs"];

function addItem(newItem) {
    shoppingList.push(newItem); 
}

console.log("Initial List:", shoppingList);

addItem("Bananas"); 
addItem("Cheese");  

console.log("Updated List:", shoppingList);



const food=["pizza","burger","kfc","frenchfries"];
console.log(food);
food.push("tandori");
food.unshift("biriyani");
console.log("modified array is: ",food);
food.shift();
console.log(" array is: ",food);
const extend=[...food,"chicken curry","pulav"];
console.log(extend);
//functions
function greet(a,b){
    result=a+b;
}
console.log(greet(8,9));
console.log(result);
//arrow functions
const square = n => n * n;
console.log(square(4));
