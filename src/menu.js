import "./menu.css";
import springRoll from "./assets/img/spring-roll.jpg";
import pasta from "./assets/img/pasta.jpg";
import mango from "./assets/img/mango-sticky-rice.jpg";

const populateMenu = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.classList.add("menu");

    const contentTitle = document.createElement("h2");
    contentTitle.textContent = "Menu";

    // Section One
    const sectionOne = document.createElement("section");
    const oneHead = document.createElement("div");
    oneHead.className = "header";
    const oneContent = document.createElement("div");
    oneContent.className = "content";

    const oneImg = document.createElement("img");
    const oneTitle = document.createElement("p");

    oneImg.src = springRoll;
    oneTitle.textContent = "Spring Rolls";

    oneContent.textContent = "Crispy pastry stuffed with seasonal vegetables sauted in fragrant sesame oil and oriental spices.";

    oneHead.appendChild(oneImg);
    oneHead.appendChild(oneTitle);

    sectionOne.appendChild(oneHead);
    sectionOne.appendChild(oneContent);

    // Section Two
    const sectionTwo = document.createElement("section");
    const twoHead = document.createElement("div");
    twoHead.className = "header";
    const twoContent = document.createElement("div");
    twoContent.className = "content";

    const twoImg = document.createElement("img");
    const twoTitle = document.createElement("p");

    twoImg.src = pasta;
    twoTitle.textContent = "Aglio Olio";

    twoContent.textContent = "Al dente spaghetti tossed in shrimp with extra virgin olive oil with parsley and oregano.";

    twoHead.appendChild(twoImg);
    twoHead.appendChild(twoTitle);

    sectionTwo.appendChild(twoContent)
    sectionTwo.appendChild(twoHead);;

    // Section One
    const sectionThree = document.createElement("section");
    const threeHead = document.createElement("div");
    threeHead.className = "header";
    const threeContent = document.createElement("div");
    threeContent.className = "content";

    const threeImg = document.createElement("img");
    const threeTitle = document.createElement("p");

    threeImg.src = mango;
    threeTitle.textContent = "Mango Sticky Rice";

    threeContent.textContent = "Fresh mangoes served on warm, sweet and sticky Thai fragrant rice drizzled with pandan flavored coconut cream.";

    threeHead.appendChild(threeImg);
    threeHead.appendChild(threeTitle);

    sectionThree.appendChild(threeHead);
    sectionThree.appendChild(threeContent);

    contentDiv.appendChild(contentTitle);
    contentDiv.appendChild(sectionOne);
    contentDiv.appendChild(sectionTwo);
    contentDiv.appendChild(sectionThree);
};

export { populateMenu };