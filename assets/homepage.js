const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '0dc28fbcb9mshb78abb346d445efp1333a3jsn79268baadc63'
	}
};
var recipeFormEl = document.querySelector("#recipe-form");
var ingredientInputEl = document.querySelector("#ingredient");
var recipesContainerEl = document.querySelector("#recipes-container");
var ingredientSearchTerm = document.querySelector("#ingredient-search-term");

var formSubmitHandler = function(event) {
    event.preventDefault();
    var ingredient = ingredientInputEl.value.trim();
        if (ingredient) {
            console.log(ingredient);
            getRecipes(ingredient);
            ingredientInputEl.value = "";
        } else {
            alert("Please enter a main ingredient");
        }

    console.log(event);
};
var displayRecipes = function(recipes, searchTerm) {
    console.log(recipes);
    console.log(searchTerm);
    recipesContainerEl.textContent = "";
    ingredientSearchTerm.textContent = searchTerm;

    for (var i=0; i < recipes.length; i++) {
        var recipeName = recipes[i].description;
        var recipeEl = document.createElement("div");
        recipeEl.classList = "list-item flex-row justify-space-between align-center";
        var titleEl = document.createElement("span");
        titleEl.textContent = recipeName;

        recipeEl.appendChild(titleEl);

        recipesContainerEl.appendChild(recipeEl);
    }

};

var getRecipes = function(ingredient) {
    let apiUrl = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&q=" + ingredient;
    fetch(apiUrl, options)
    .then(function(response) {
        response.json()
        .then(function(data) {
            displayRecipes(data, ingredient);
        }).catch(function(error) {
            console.log(error);
        })

    });
};



recipeFormEl.addEventListener("submit", formSubmitHandler);
/*     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=vegetarian', options)  

    */

