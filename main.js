// check HTML
// query selector
var buttonLetsCook = document.querySelector('.cook-button');
var rightContainer = document.querySelector('.cookpot');
var pickSides = document.getElementsByName('decide');
var recipe = document.querySelector('.recipe');
// var pickMainDish = document.querySelector('.recipe')
// var pickDesserts = document.querySelector('.recipe')

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
// window.addEventListener("load", letsCook);

buttonLetsCook.addEventListener("click", letsCook);

// buttonLetsCook.addEventListener("click", letsCook);


// functions

  function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// function letsCook() {
// var newSides = getRandomIndex(sides);
// var newMains = getRandomIndex(mains);
// var newDesserts = getRandomIndex(desserts);
// postSides.innerText = newSides;
// rightContainer.classList.add('hidden');
// postMains.innerText = newMains;
// postDesserts.innerText = newDesserts;
// postSides.innerText = `You should make ${newSides} || ${newMains}!`;
// rightContainer.classList.add('hidden');
// }

  function letsCook() {
    var newSides = getRandom(sides);
    for (var i = 0; i < pickSides.length; i++) {
      if (pickSides[i].checked) {
        showRecipe(pickSides[i].value) ;
    // = `You should make ${[i]}!`;
  }
}
    rightContainer.classList.add('hidden');
}
  showRecipe() {
    

 }



// We want to hide cookpot
// We want to show one of them at each time not all of them ,use if
