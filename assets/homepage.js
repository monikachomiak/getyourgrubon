const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'yummly2.p.rapidapi.com',
		'X-RapidAPI-Key': '0dc28fbcb9mshb78abb346d445efp1333a3jsn79268baadc63'
	}
};
// fetch('https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=5&q=chicken%20soup'


var recipeFormEl = document.querySelector("#recipe-search-form");
var ingredientInputEl = document.querySelector("#ingredient");
var recipesContainerEl = document.querySelector("#recipes-container");
var ingredientSearchTermEl = document.querySelector("#ingredient-search-term");


var getRecipes = function(ingredient) {
	var apiUrl = "https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=5&q=" + ingredient;
	var response = fetch(apiUrl, options)
	.then(function(response) {
		response.json().then(function(data) {
			displayRecipes(data, ingredient);
	});
});
};

var formSubmitHandler = function(event) {
	event.preventDefault();
	var recipe = ingredientInputEl.value.trim();

		if (recipe) {
			getRecipes(recipe);
			ingredientInputEl.value = "";
		} else {
			alert("Please enter an ingredient.");
		}
	console.log(event);
};

var displayRecipes = function(recipes, ingredientSearchTermEl) {
	console.log(recipes);
	console.log(ingredientSearchTermEl);
	recipesContainerEl.textContent = "";
	ingredientSearchTermEl.textContent = ingredientSearchTermEl;

		// loops recipes
		for(var i=0; i < recipes.length; i++) {
		
			// format recipe name
			var recipeName = recipes[i].feed.display + "/" + recipes[i].name;
			
			// container for each recipe
			var recipeEl = document.createElement("div");
			recipeEl.classList = "list-item";
	
			// span element to hold recipe name
			var titleEl = document.createElement("span");
			titleEl.textContent = recipeName;
	
			// append to container
			recipeEl.appendChild(titleEl);
	
			// append container to the dom
			recipesContainerEl.appendChild(recipeEl);
	
			} 
};

recipeFormEl.addEventListener("submit", formSubmitHandler);




/*var recipesContainerEl = document.querySelector("#recipes-container");
var ingredientSearchTerm = document.querySelector("#ingredient-search-term");
var recipeFormEl = document.querySelector("#recipe-form");
var ingredientInputEl = document.querySelector("#recipe");


/* var getRecipes = function(recipe) {
	let apiUrl = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=5" + recipe;
		var response = fetch(apiUrl, options).then(function(response) {
			response.json().then(function(data) {
				displayRecipes(data, recipe);
			});
		});
	};				




var formSubmitHandler = function(event) {
    event.preventDefault();
	var recipe = ingredientInputEl.value.trim();
		if (recipe) {
			getRecipes(recipe);
			ingredientInputEl.value = "";
		} else {
			alert("Please enter an ingredient");
		}
    console.log(event);
};

var displayRecipes = function(recipe, ingredientSearchTerm) {
	console.log(recipe);
	console.log(ingredientSearchTerm);
	
	document
	.querySelector("#recipe-container")
	recipesContainerEl.textContent = "";
	ingredientSearchTerm.textContent = ingredientSearchTerm;
		
		// loops recipes
		for(var i=0; i < recipe.length; i++) {
		
		// format recipe name
		var recipeName = recipe[i].show.id + "/" + recipe[i].name;
		
		// container for each recipe
		var recipeEl = document.createElement("div");
		recipeEl.classList = "list-item";

		// span element to hold recipe name
		var titleEl = document.createElement("span");
		titleEl.textContent = recipeName;

		// append to container
		recipeEl.appendChild(titleEl);

		// append container to the dom
		recipesContainerEl.appendChild(recipeEl);

		}
}

recipeFormEl.addEventListener("submit", formSubmitHandler);


/*     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=vegetarian', options)  

    */

