class Recipe {
    constructor(title, href, ingredients, thumbnail){
        this.title = title;
        this.href = href;
        this.ingredients = ingredients;
        this.thumbnail = thumbnail;
    }
}

class RecipiesManager {
    constructor(){
        this.recipeList = DATA.map(recipe => new Recipe(
            recipe.title,
            recipe.href,
            recipe.ingredients,
            recipe.thumbnail
        ));
    }

    search = (keyword) => {

        return this.recipeList.filter(recipe => {
            return recipe.title.toLowerCase().includes(keyword.trim().toLowerCase());
        })
    }
}