import axios from 'axios';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`)
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error)
            alert('Sorry but something went wrong :(');
        }
    }

    calcTime() {
        // assuming that we need 15min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }

    parseIngredients() {
        const newIngredients = this.ingredients.map(el => {

            const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
            const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
            const units = [...unitsShort, 'kg', 'g']

            // 1- uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            })


            // 2- remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // 3- parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));

            let objInt;
            if (unitIndex > -1) {
                // there is a unit
                const arrCount = arrIng.slice(0, unitIndex);
                let count;

                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objInt = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                }

            } else if (parseInt(arrIng[0], 10)) {
                // first index is a unit
                objInt = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            } else if (unitIndex === -1) {
                // there is no unit
                objInt = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }

            return objInt;

        });
        this.ingredients = newIngredients;
    }

    updateServings(type) {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings); //count(8) *= (newServings(3) / this.servings(4)) = 6
        });

        this.servings = newServings;

    }
}