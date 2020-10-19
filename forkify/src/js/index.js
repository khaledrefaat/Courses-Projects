import Search from './modules/Search';
import Recipe from './modules/Recipe';
import List from './modules/List';
import Likes from './modules/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import {
    elements,
    renderLoader,
    clearLoader
} from './views/base';

/** Gloabl state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};

/* ****************************************** */
/* Search Controller */

const controlSearch = async () => {
    // 1- get query from view

    const query = searchView.getInput();


    if (query) {

        // 2- new search object and add to state

        state.search = new Search(query);
        // 3-  Prepare UI for the results
        searchView.clearResult();
        searchView.clearInput();
        renderLoader(elements.searchRes)

        try {
            // 4- Search for the recipes
            await state.search.getResult();

            // 5- render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert('something went wrong with the search :(')
            clearLoader();
        }
    }
}


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})





elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearResult();
        searchView.renderResults(state.search.result, goToPage);
    }
})

/* ****************************************** */
/* Recipe Controller */

const controllerRecipe = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        // prepare ui for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // highlighted recipe
        if (state.search) searchView.highlightedSelected(id);

        // create new recipe object
        state.recipe = new Recipe(id);


        try {
            // get recipe data and parse ingredints
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // render recipe
            clearLoader();
            recipeView.clearRecipe();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        } catch (error) {
            alert('recipe not found!!');
        }

    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controllerRecipe));


// handling recipe button click
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // this is belongs to listController
        controlList();

    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        // this is belongs to like controller
        controlLike();
    }
});

/* ****************************************** */
/* List Controller */


const controlList = () => {
    // delete old list
    listView.clearList();

    //  create a new list if there is none yet
    if (!state.list) state.list = new List();

    //  add each ingredient to the list and Ui
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    })
}

// handel delete and update listItem events

elements.shopping.addEventListener('click', e => {


    const id = e.target.closest('.shopping__item').dataset.itemid;

    // handel the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // delete from state
        state.list.deleteItem(id);

        // delete from ui
        listView.deleteItem(id);

        // handel the count update
    } else if (e.target.matches('.shopping__count--value')) {
        const val = parseFloat(e.target.value, 10);
        if (val > 0) state.list.updateCount(id, val); // to not update with negative value
    }
})


/* ****************************************** */
/* Like Controller */

// restore liked recipes when the page reload
window.addEventListener('load', () => {
    state.likes = new Likes();

    // restore likes
    state.likes.readStorage();

    // toggle button menu
    likesView.toggleLikesMenu(state.likes.getNumLikes());

    // render existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
})


const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // user had not yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
        // add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        )
        // Toggle the like button
        likesView.toggleLikeBtn(true);

        // add like to ui list
        likesView.renderLike(newLike);
    } else {
        // Delete like from the state 
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);
        // Add the like to UI list
        likesView.deleteLike(currentID);
    }
    likesView.toggleLikesMenu(state.likes.getNumLikes());
};