var mealButtonsEl = document.querySelector("div", "#meal-buttons");





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