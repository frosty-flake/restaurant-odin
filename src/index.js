import "./style.css";
import { populateHome } from "./home.js";
import { populateMenu } from "./menu.js";
import { populateContact } from "./contact.js";

const uiController = (function() {
    const homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", () => {
      const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.className = "";
    
    populateHome();
    });

    const menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", () => {
      const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.className = "";
    
    populateMenu();
    });

    const contactButton = document.querySelector("#contact");
    contactButton.addEventListener("click", () => {
      const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    contentDiv.className = "";
    
    populateContact();
    });
})();

populateHome();