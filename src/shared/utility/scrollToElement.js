const scrollToElement = (elementId) => {
  // Find the element you want to scroll to
  const aboutSection = document.getElementById(elementId); //example: elementId = "about"

  // Scroll to the element
  aboutSection.scrollIntoView({ behavior: 'smooth' });
};

export default scrollToElement;
