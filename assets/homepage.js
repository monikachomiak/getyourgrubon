
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '0dc28fbcb9mshb78abb346d445efp1333a3jsn79268baadc63'
	}
};
let apiUrl = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=30";
var getRecipes = function() {
    fetch (apiUrl, options)
    .then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};



var mealButtonsEl = document.querySelector("div", "#meal-buttons");

/*     fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30&tags=vegetarian', options)
*/

getRecipes();






/*  

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '0dc28fbcb9mshb78abb346d445efp1333a3jsn79268baadc63'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    */