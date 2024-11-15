let card = document.querySelectorAll("#card");
let text = document.querySelectorAll("p");
let Header = document.querySelector(
  ".navbar.sticky-top.navbar-expand-lg.navbar-light.bg-white"
);
let navtext = document.querySelectorAll(".navbar-light .navbar-nav .nav-link");
let navs = document.querySelector(".navbar-light.navbar-nav.nav-link");
let section = document.querySelector("#resume");
let skillSection = document.querySelectorAll(".card .card-body ");
let skillSectionHeader = document.querySelectorAll(".card .card-header");
let t = document.querySelectorAll("h4");
let service = document.getElementById("Certificate");
let certificate = document.querySelector(".section.bg-custom-gray ");
let p_text = document.querySelectorAll(".text-dark");
let footer = document.querySelector(".contact .map ");
let res = document.querySelectorAll("#res");
let textli = document.querySelectorAll(".info span ");
let subtitle = document.querySelector(
  ".header .header-content .header-subtitle "
);
let contact = document.querySelectorAll(
  ".contact .contact-form-card, .contact .contact-info-card"
);
let toggler = document.querySelector(".navbar-light .navbar-toggler");
let image = document.querySelector(".image-container");
let Projects = document.getElementById("Projects");
let i = 1;
let change = () => {
  // Condition for light or dark mode (use i%2 === 0 or any other condition)
  if (i % 2 === 0) {
    // Dark Mode Styles
    card.forEach((card) => {
      card.style.cssText = `background-color: black; color: aliceblue; padding: 20px; border-radius: 10px;`;
    });

    text.forEach((text) => {
      text.style.cssText = `color: aliceblue;`;
    });

    navtext.forEach((link) => {
      link.style.color = "white"; // Change text color to white
    });

    t.forEach((header) => {
      header.style.color = "white"; // Change the text color to white
    });

    Header.style.cssText = `background-color: black;color: aliceblue;`;
    section.style.cssText = `background-color: black;`;

    skillSection.forEach((section) => {
      section.style.cssText = `background-color: black; color: white;`;
    });

    skillSectionHeader.forEach((header) => {
      header.style.cssText = `background-color: black;`;
    });

    service.style.backgroundColor = "black";
    certificate.style.cssText = `background-color: black;color: aliceblue;`;

    p_text.forEach((element) => {
      element.style.color = "#F85C70"; // Set background color to black
    });

    footer.style.backgroundColor = "black";
    contact.forEach((contact) => {
      contact.style.backgroundColor = "black"; // Set background color to black
      contact.style.color = "white"; // Optionally, set text color to white for visibility
    });

    res.forEach((element) => {
      element.style.color = "white"; // Set text color to white
    });
    image.style.backgroundColor = "black";
    toggler.style.cssText = `background-color: #F85C70; border-radius: 0.1rem;`;

    textli.forEach((span) => {
      span.style.color = "white"; // Light grey background
    });
    subtitle.style.color = "F85C70";

    Projects.style.backgroundColor = "black";
  } else {
    // Light Mode Styles
    card.forEach((card) => {
      card.style.cssText = `background-color: white; color: black; padding: 20px; border-radius: 10px;`;
    });

    text.forEach((text) => {
      text.style.cssText = `color: black;`;
    });

    navtext.forEach((link) => {
      link.style.color = "black"; // Change text color to black
    });

    t.forEach((header) => {
      header.style.color = "black"; // Change the text color to black
    });

    Header.style.cssText = `background-color: white;color: black;`;
    section.style.cssText = `background-color: white;`;

    skillSection.forEach((section) => {
      section.style.cssText = `background-color: white; color: black;`;
    });

    skillSectionHeader.forEach((header) => {
      header.style.cssText = `background-color: white;`;
    });

    service.style.backgroundColor = "white";
    certificate.style.cssText = `background-color: white;color: black;`;

    p_text.forEach((element) => {
      element.style.color = "#F85C70"; // Set text color to dark
    });

    footer.style.backgroundColor = "white";
    contact.forEach((contact) => {
      contact.style.backgroundColor = "white"; // Set background color to white
      contact.style.color = "black"; // Optionally, set text color to black for visibility
    });

    res.forEach((element) => {
      element.style.color = "black"; // Set text color to black
    });
    image.style.backgroundColor = "white";
    toggler.style.cssText = `background-color: white; border-radius: 0.1rem;`;

    textli.forEach((span) => {
      span.style.color = "black"; // Light grey background
    });
    subtitle.style.color = "white";
    Projects.style.backgroundColor = "white";
  }
  i++;
};
