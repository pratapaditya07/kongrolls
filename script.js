// Get elements
const mainDiv = document.getElementById('main');
const absoluteDiv = document.getElementById('absolute_wala_div');
const videoElement = document.querySelector('#main video');

// Function to change background image based on scrolled section
function changeBackgroundImage() {
const sections = document.querySelectorAll('.written_material');
const currentScrollPosition = absoluteDiv.scrollTop;
const sectionHeight = window.innerHeight;
  // Determine which section is currently in view
let currentSectionIndex = Math.floor(currentScrollPosition / sectionHeight);

  // Change background image
if (currentSectionIndex >= 0 && currentSectionIndex < 7) {
    mainDiv.style.backgroundImage = `url(/media/image${(currentSectionIndex-1) + 1}.png)`;
}

  // Hide video if first section scrolls up
if (currentSectionIndex > 0) {
    videoElement.style.display = 'none';
} else if (videoElement) {
    videoElement.style.display = 'block';
}
}

// Add event listener to scroll event
absoluteDiv.addEventListener('scroll', changeBackgroundImage);

// Initial setup
changeBackgroundImage();
