const inputFoodName = document.getElementById('input-food-name')
//Function To connect with all food list API 
searchByName = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName.value}`)
        .then(response => response.json())
        .then(data => foodNames(data));

}

// Function to search food name and show that
const foodNames = foodData => {
    if (foodData.meals === null || inputFoodName.value === "") {
        alert('No result found');
    } else {
        const item = foodData.meals;
        item.forEach(food => {
            const foodContainer = document.getElementById('food-container');
            const ImgNameDiv = document.createElement('div');
            ImgNameDiv.className = 'img-name-div';
            ImgNameDiv.innerHTML =
                `<a  onclick = 'foodDetails(${food.idMeal})' href='#food-details'><img src='${food.strMealThumb}'>
                <p>${food.strMeal}</p></a>
                `
            const foodIdArray = [];
            foodIdArray.push(food.idMeal);
            foodContainer.appendChild(ImgNameDiv);
        });
    }
}

//Function to connect with API for food ingredients information 
const foodDetails = (id) => {
    document.getElementsByClassName
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => ingredientsList(data));
}

//Function to show food details information
const ingredientsList = (data) => {
       const foodDetails = document.getElementById('food-details');
    const meal = data.meals[0];
    foodDetails.innerHTML = `
    <div id='img-div'>
    <img src='${meal.strMealThumb}'>
    </div>
    <div id='ingredient-div'>
    <h1>${meal.strMeal}</h1>
    <h4>Ingredients</h4>
    <ul id=list-Ul>
    <li>${meal.strIngredient1 + " " + meal.strMeasure1}</li>
    <li>${meal.strIngredient2 + " " + meal.strMeasure2}</li>
    <li>${meal.strIngredient3 + " " + meal.strMeasure3}</li>
    <li>${meal.strIngredient4 + " " + meal.strMeasure4}</li>
    <li>${meal.strIngredient5 + " " + meal.strMeasure5}</li>
    <li>${meal.strIngredient6 + " " + meal.strMeasure6}</li>
    <li>${meal.strIngredient7 + " " + meal.strMeasure7}</li>
    <li>${meal.strIngredient8 + " " + meal.strMeasure8}</li>
    <li>${meal.strIngredient9 + " " + meal.strMeasure9}</li>
    <li>${meal.strIngredient10 + " " + meal.strMeasure10}</li>
    <li>${meal.strIngredient11 + " " + meal.strMeasure11}</li>
    <li>${meal.strIngredient12 + " " + meal.strMeasure12}</li>
    <li>${meal.strIngredient13 + " " + meal.strMeasure13}</li>
    <li>${meal.strIngredient14 + " " + meal.strMeasure14}</li>
    <li>${meal.strIngredient15 + " " + meal.strMeasure15}</li>
    <li>${meal.strIngredient16 + " " + meal.strMeasure16}</li>
    <li>${meal.strIngredient17 + " " + meal.strMeasure17}</li>
    <li>${meal.strIngredient18 + " " + meal.strMeasure18}</li>
    <li>${meal.strIngredient19 + " " + meal.strMeasure19}</li>
    <li>${meal.strIngredient20 + " " + meal.strMeasure20}</li>
    </ul>
    </div>
    `
}

