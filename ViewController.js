class ViewController {
  constructor() {
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);
    this.recepiesManager = new RecipiesManager();
  }

  handleHashChange = () => {
    let hash = window.location.hash.slice(1) || "allRecepies";

    const pageIds = [
      "allRecepies",
      "favoriteRecepie",
      "createRecepie",
      "myProfile",
      "errorPage",
    ];

    pageIds.forEach((id) => {
      let page = document.getElementById(id);

      if (hash === id) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });

    switch (hash) {
      case "allRecepies":
        this.renderAllRecepiesPage();
        break;
      case "favoriteRecepie":
        this.renderFavoriteRecepies();
    }
  };

  renderRecepies = (recipeList, container) => {
        container.innerHTML = "";

        recipeList.forEach((recipe) => {
        let card = createElement("div");
        card.classList.add("card");
        card.style.width = "200px";
  
        let tumbnail = createElement("img");
        tumbnail.src = recipe.thumbnail;
        tumbnail.style.width = "200px";
  
        let title = createElement("div");
        title.innerText = recipe.title;
  
        let ingredients = createElement("div");
        ingredients.innerText = recipe.ingredients;
  
        let addToFavorites = createElement("button");
        addToFavorites.classList = "add"
        addToFavorites.innerText = "Добави в любими";
  
        let cook = createElement("button");
        cook.innerText = "Сготви";
  
        card.append(tumbnail, title, ingredients, addToFavorites, cook);
  
        container.appendChild(card);
      });
  }

  renderAllRecepiesPage = () => {
    let searchByName = document.getElementById("searchByName");

    searchByName.addEventListener("input", (e) => {
        let result = this.recepiesManager.search(e.target.value);

        this.renderRecepies(result, recepiesContainer);
    });

    let recepiesContainer = document.querySelector("#allRecepies .container");

    this.renderRecepies(this.recepiesManager.recipeList, recepiesContainer);
  };

  renderFavoriteRecepies = () => {

  };
}

let viewController = new ViewController();
