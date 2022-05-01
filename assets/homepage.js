
var mealButtonsEl = document.querySelector("div", "#meal-buttons");




/*
var getRecipes = function(meal){
    var apiUrl = "https://tasty.p.rapidapi.com/recipes/auto-complete";
        fetch(apiUrl).then(function(response){
            if (response.ok) {
                response.json().then(function(data){
                    displayRecipes(data.items, meal);
                });
            } else {
                alert("Error: Recipe Not Found.");
            }
        });
};

var getRecipes = function() {
    fetch('https://api.spoonacular.com/recipes/complexSearch');
};
getRecipes(); */

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '0dc28fbcb9mshb78abb346d445efp1333a3jsn79268baadc63'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=breakfast', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


