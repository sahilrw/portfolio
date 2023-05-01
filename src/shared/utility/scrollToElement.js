const scrollToElement = (elementId, offset = 150) => {
  // Find the element you want to scroll to
  const element = document.getElementById(elementId);

  // Calculate the y position to scroll to with the offset
  const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

  // Scroll to the element with the offset
  window.scroll({
    top: y,
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
};

export default scrollToElement;
