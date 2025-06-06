import "./home.css";
import bannerImage from "./assets/img/odin-banner.svg";

const populateHome = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.classList.add("home");

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "Home";
    
    const image = document.createElement("img");
    image.setAttribute("alt", "Odin Banner");
    image.src = bannerImage;

    const attribution = document.createElement("p");
    attribution.classList.add("attribution");
    const attributionLink = document.createElement("a");
    attributionLink.href = "https://www.theodinproject.com/";
    attributionLink.textContent = "The Odin Project";
    attribution.textContent = `Image from `;
    attribution.appendChild(attributionLink);
    attribution.appendChild(document.createTextNode("."));

    // About Section
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");
    const aboutSectionHead = document.createElement("div");
    aboutSectionHead.classList.add("header");
    const aboutSectionContent = document.createElement("div");
    aboutSectionContent.classList.add("content");

    const aboutHeadText = document.createElement("p");
    aboutHeadText.textContent = "Who are we?";
    
    const aboutContent = document.createElement("p");
    aboutContent.textContent = "We're a fake restaurant created by the mind of Frosty to fill up space for his restaurant page project! If we existed, we would strive to serve the best quality food inspired by the process of web development. We would work hard to give our customers the best code they ever had."

    aboutSectionContent.appendChild(aboutContent);
    aboutSectionHead.appendChild(aboutHeadText);
    aboutSection.appendChild(aboutSectionHead);
    aboutSection.appendChild(aboutSectionContent);

    // Opening hours
    const hoursSection = document.createElement("section");
    hoursSection.classList.add("hours");
    const hoursSectionHead = document.createElement("div");
    hoursSectionHead.className = "header";
    const hoursSectionContent = document.createElement("div");
    hoursSectionContent.className = "content";

    const hoursHeadText = document.createElement("p");
    hoursHeadText.textContent = "Opening hours";

    const hoursContentWeekdays = document.createElement("p");
    hoursContentWeekdays.textContent = "Weekdays: 10am - 6pm";
    const hoursContentSat = document.createElement("p");
    hoursContentSat.textContent = "Saturday: 10am - 4pm";
    const hoursContentSun = document.createElement("p");
    hoursContentSun.textContent = "Sunday: Closed";

    hoursSectionContent.appendChild(hoursContentWeekdays);
    hoursSectionContent.appendChild(hoursContentSat);
    hoursSectionContent.appendChild(hoursContentSun);
    hoursSectionHead.appendChild(hoursHeadText);
    hoursSection.appendChild(hoursSectionContent);
    hoursSection.appendChild(hoursSectionHead);

    // Location section
    const locationSection = document.createElement("section");
    locationSection.classList.add("location");
    const locationSectionHead = document.createElement("div");
    locationSectionHead.className = "header";
    const locationSectionContent = document.createElement("div");
    locationSectionContent.className = "content";

    const locationHeadText = document.createElement("p");
    locationHeadText.textContent = "Find us at";

    const locationContentOne = document.createElement("p");
    locationContentOne.textContent = "101 Javascript Boulevard";
    const locationContentTwo = document.createElement("p");
    locationContentTwo.textContent = "#01-987 A223344";

    locationSectionContent.appendChild(locationContentOne);
    locationSectionContent.appendChild(locationContentTwo);
    locationSectionHead.appendChild(locationHeadText);
    locationSection.appendChild(locationSectionHead);
    locationSection.appendChild(locationSectionContent);
    
    // Append content to main div
    contentDiv.appendChild(pageTitle);
    contentDiv.appendChild(image);
    contentDiv.appendChild(attribution);
    contentDiv.appendChild(aboutSection);
    contentDiv.appendChild(hoursSection);
    contentDiv.appendChild(locationSection);
};

export { populateHome };