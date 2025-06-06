import "./contact.css";

const populateContact = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.classList.add("contact");

    const contactTitle = document.createElement("h2")
    contactTitle.textContent = "Contact Us!"

    const contentSection = document.createElement("section");
    
    const numLabel = document.createElement("p");
    const numText = document.createElement("p");
    
    const mailLabel = document.createElement("p");
    const mailText = document.createElement("p");

    numLabel.className = "name";
    mailLabel.className = "name";

    numText.className = "content";
    mailText.className = "content";

    numLabel.textContent = "Phone Number:";
    numText.textContent = "9696 9420";

    mailLabel.textContent = "Email:";
    mailText.textContent = "odinrestaurant@fakemail.com";

    contentSection.appendChild(numLabel);
    contentSection.appendChild(numText);
    contentSection.appendChild(mailLabel);
    contentSection.appendChild(mailText);

    contentDiv.appendChild(contactTitle);
    contentDiv.appendChild(contentSection)
};

export { populateContact };