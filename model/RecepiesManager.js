class Recipe {
    constructor(name, ingredients, link, image){
        this.name = name;
        this.ingredients = ingredients;
        this.link = link;
        this.image = image;
    }
}

class RecipiesManager {
    constructor(){
        this.recipeList = DATA.map(recipe => new Recipe(
            recipe.name,
            recipe.ingredients,
            recipe.link,
            recipe.image
        ));
    }

    search(keyword) {

        return this.recipeList.filter(recipe => {
            return recipe.name.toLowerCase().includes(keyword.trim().toLowerCase());
        })
    }
}