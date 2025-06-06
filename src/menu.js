import "./menu.css";

const populateMenu = () => {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "Menu!";
};

export { populateMenu };