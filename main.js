// check HTML
// query selector
var buttonLetsCook = document.querySelector('.cook-button');
var rightContainer = document.querySelector('.cookpot');
var side = document.querySelector('#radio-side');
var mainDish = document.querySelector('#radio-main-dish');
var dessert = document.querySelector('#radio-dessert');
var clearButton = document.querySelector('.clear-button');

var recipe = document.querySelector('.recipe');


// var pickMainDish = document.querySelector('.recipe')
// var pickDesserts = document.querySelector('.recipe')
var showItem = document.querySelector('p')

// Arrays
var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
]

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
]

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
]

// eventListener
buttonLetsCook.addEventListener("click", letsCook);

// functions

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
};

  function letsCook() {
    console.log(getRandom(sides));
      if (side.checked) {
       showItem.innerText = `${getRandom(sides)}!`
     } else if (mainDish.checked) {
       showItem.innerText = `${getRandom(mains)}!`
     } else if (dessert.checked) {
       showItem.innerText = `${getRandom(desserts)}`
     }
    rightContainer.classList.add('hidden');
    clearButton.classList.remove('hidden');
}
