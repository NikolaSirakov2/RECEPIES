class ViewController {

constructor() {
    window.addEventListener("hashchange", this.changeMainPage);
    window.addEventListener("load", this.changeMainPage);
    this.recepiesManager = new RecipiesManager();
  }

  changeMainPage = () => {
    let hash = window.location.hash.slice(1);

    let allRecepies = document.getElementById("allRecepies");
    let favoriteRecepie = document.getElementById("favoriteRecepie");
    let createRecepie = document.getElementById("createRecepie");

    if (hash === "allRecepies") {
      allRecepies.style.display = "flex";
      favoriteRecepie.style.display = "none";
      createRecepie.style.display = "none";
    } else if (hash === "favoriteRecepie") {
      allRecepies.style.display = "none";
      favoriteRecepie.style.display = "flex";
      createRecepie.style.display = "none";
    } else if (hash === "createRecepie") {
      allRecepies.style.display = "none";
      favoriteRecepie.style.display = "none";
      createRecepie.style.display = "flex";
    }

    switch (hash) {
      case "allRecepies":
        this.renderallRecepiesPage();
        break;
      case "favoriteRecepie":
        this.renderfavoriteRecepiePage();
        break;
      case "createRecepie":
        this.renderfavoriteRecepiePage();
        break;
    }
  };



}  

let viewController = new ViewController();