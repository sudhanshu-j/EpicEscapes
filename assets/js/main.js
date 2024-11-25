//=========== Making a Responsive Navigation Menu ( Hamburger Menu ) ===========//

// Get the navigation menu element by its ID
const navMenu = document.getElementById("nav-menu"),
  // Get the navigation toggle button element by its ID
  navToggle = document.getElementById("nav-toggle"),
  // Get the navigation close button element by its ID
  navClose = document.getElementById("nav-close");

// Menu show

// Check if the navToggle element exists in the DOM
if (navToggle) {
  // Add a click event listener to the navToggle element
  navToggle.addEventListener("click", () => {
    // When the navToggle is clicked, add the "show-menu" class to the navMenu
    // This class typically controls the visibility of the menu, making it visible
    navMenu.classList.add("show-menu");
  });
}

// Menu hide

// Check if the navClose element exists in the DOM
if (navClose) {
  // Add a click event listener to the navClose element
  navClose.addEventListener("click", () => {
    // When the navClose is clicked, remove the "show-menu" class from the navMenu
    // This class removal typically hides the menu
    navMenu.classList.remove("show-menu");
  });
}

//=========== Removing Navigation Menu When The Navigation Link Is Clicked ===========//

// Select all elements with the class 'nav-link' and store them in a NodeList
const navLink = document.querySelectorAll(".nav-link");

// Define a function that will be called when a nav link is clicked
const linkAction = () => {
  // Get the navigation menu element by its ID
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link, we remove the 'show-menu' class
  // This hides the navigation menu by applying different CSS styles
  navMenu.classList.remove("show-menu");
};

// Loop through each nav link and add a click event listener
navLink.forEach((n) =>
  // When a nav link is clicked, execute the linkAction function
  n.addEventListener("click", linkAction)
);

//=========== Adding Blur Effect to The Navigation When User Scroll The Page ===========//

// Define a function to apply a blur effect to the header based on scroll position
const blurHeader = () => {
  // Get the header element by its ID
  const header = document.getElementById("header");

  // Check if the current vertical scroll position (this.scrollY) is greater than or equal to 50
  this.scrollY >= 50
    ? // If true, add the class 'blur-header' to the header element
      header.classList.add("blur-header")
    : // If false, remove the class 'blur-header' from the header element
      header.classList.remove("blur-header");
};

// Add an event listener to the window object that triggers the blurHeader function on scroll
window.addEventListener("scroll", blurHeader);

//=========== Adding Scroll Up Button ===========//

// Define a function to show or hide the "scroll up" button based on scroll position
const scrollUp = () => {
  // Get the "scroll up" button element by its ID
  const scrollUp = document.getElementById("scroll-up");

  // Check if the current vertical scroll position (this.scrollY) is greater than or equal to 350 pixels
  this.scrollY >= 350
    ? // If true, add the class 'show-scroll' to the scrollUp element
      scrollUp.classList.add("show-scroll")
    : // If false, remove the class 'show-scroll' from the scrollUp element
      scrollUp.classList.remove("show-scroll");
};

// Add an event listener to the window object that triggers the scrollUp function on scroll
window.addEventListener("scroll", scrollUp);

//=========== Adding Active Class To the Section Link Whenever User Scroll Through The Page, The Navigation Link Gets The Active Class ===========//

// Select all section elements that have an ID attribute
const sections = document.querySelectorAll("section[id]");

// Define a function to highlight the active navigation link based on scroll position
const scrollActive = () => {
  // Get the current vertical scroll position of the window
  const scrollDown = window.scrollY;

  // Loop through each section to determine which one is currently active
  sections.forEach((current) => {
    // Get the height of the current section
    const sectionHeight = current.offsetHeight,
      // Get the top position of the current section, adjusting for any fixed header (58 pixels in this case)
      sectionTop = current.offsetTop - 58,
      // Get the ID of the current section
      sectionId = current.getAttribute("id"),
      // Select the corresponding navigation link based on the section ID
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    // Check if the current scroll position is within the bounds of the current section
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // If so, add the 'active-link' class to the corresponding navigation link
      sectionsClass.classList.add("active-link");
    } else {
      // If not, remove the 'active-link' class from the corresponding navigation link
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Add an event listener to the window object that triggers the scrollActive function on scroll
window.addEventListener("scroll", scrollActive);

//=========== Adding Scroll Reveal Animation To Each Section Classes ===========//

// Initialize ScrollReveal with specified configuration options
const sr = ScrollReveal({
  origin: "top", // The direction from which the elements will appear (from the top)
  distance: "60px", // The distance the elements will move from their original position
  duration: 3000, // The duration of the reveal animation in milliseconds
  delay: 400, // Delay before the animation starts for each element
  reset: true, // If true, elements will reappear when scrolled into view again
});

// Reveal multiple elements with the default configuration
sr.reveal(`.home-data, .explore-data, .explore-user, .footer-container`);

// Reveal elements with specific configurations
sr.reveal(`.home-card`, {
  delay: 600, // Delay before the animation starts for home-card
  distance: "100px", // Distance the home-card will move from its original position
  interval: 100, // Interval between the reveal of each home-card (if multiple)
});

// Reveal about section elements from the right
sr.reveal(`.about-data, .join-image`, {
  origin: "right", // These elements will appear from the right side
});

// Reveal about section elements from the left
sr.reveal(`.about-image, .join-data`, {
  origin: "left", // These elements will appear from the left side
});

// Reveal popular cards with a specific interval
sr.reveal(`.popular-card`, {
  interval: 200, // Interval between the reveal of each popular-card
});
