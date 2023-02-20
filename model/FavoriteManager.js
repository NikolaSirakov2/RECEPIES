class FavoriteRecepie {
    constructor (title, ingredients, thumbnail){
        this.title = title;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
    }
}


class FavoriteManager {

    favorite = []

    addToFavorites = (recipe) => {
        this.favorite.push(new FavoriteRecepie(recipe.title, recipe.ingredients, recipe.thumbnail));
    }
}