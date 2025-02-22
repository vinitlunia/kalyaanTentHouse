// First Slider (cloning slider for image or slide elements with looping)
let currentIndex1 = 1; // Start at 1 due to clones
const slidesContainer = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slideElements = Array.from(document.querySelectorAll('.slide'));

// Clone first and last slides
const firstClone = slideElements[0].cloneNode(true);
const lastClone = slideElements[slideElements.length - 1].cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slideElements[0]);

const totalSlides = slideElements.length + 2;
slidesContainer.style.transform = `translateX(-${100 * currentIndex1}%)`;

function showSlide(index) {
  if (index >= totalSlides - 1) {
    currentIndex1 = 1;
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(-${100 * currentIndex1}%)`;
  } else if (index <= 0) {
    currentIndex1 = totalSlides - 2;
    slidesContainer.style.transition = "none";
    slidesContainer.style.transform = `translateX(-${100 * currentIndex1}%)`;
  } else {
    currentIndex1 = index;
    slidesContainer.style.transition = "transform 2s ease";
    slidesContainer.style.transform = `translateX(-${100 * currentIndex1}%)`;
  }
  updateDots();
}

function currentSlide(index) {
  showSlide(index + 1);
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === (currentIndex1 - 1) % (totalSlides - 2));
  });
}

setInterval(() => {
  showSlide(currentIndex1 + 1);
}, 8000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => currentSlide(i));
});




// Second Slider (video slider with dot navigation)
const btns = document.querySelectorAll(".nav-btn");
const videoSlides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
let currentIndex2 = 0;

const slideNav = (manual) => {
  btns.forEach((btn) => btn.classList.remove("active"));
  videoSlides.forEach((slide) => slide.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  btns[manual].classList.add("active");
  videoSlides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

const autoSlide2 = () => {
  currentIndex2 = (currentIndex2 + 1) % videoSlides.length;
  slideNav(currentIndex2);
};

let slideInterval2 = setInterval(autoSlide2, 5000);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(slideInterval2);
    slideNav(i);
    currentIndex2 = i;
    slideInterval2 = setInterval(autoSlide2, 5000);
  });
});





// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
// function one() {
//     for (i = 0; i < elements.length; i++) {
//     elements[i].style.msFlex = "100%";  // IE10
//     elements[i].style.flex = "100%";
//   }
// }

// Two images side by side
// function two() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.msFlex = "50%";  // IE10
//     elements[i].style.flex = "50%";
//   }
// }

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var headerBtns = header.getElementsByClassName("btn");  // Changed from 'btns' to 'headerBtns'

for (var i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener("click", function() {
    // Remove 'active' class from all buttons
    for (var j = 0; j < headerBtns.length; j++) {
      headerBtns[j].classList.remove("active");
    }
    
    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
}





// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image element
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images with class="myImg"
var images = document.getElementsByClassName("myImg");

// Loop through each image and add the click event
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";  // Show the modal
    modalImg.src = this.src;  // Set the image in the modal
    captionText.innerHTML = this.alt;  // Set the caption
  };
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";  // Hide the modal
}





//Nav menu bar--

// Get the toggle button and menu elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Add click event listener to the toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'active' class on the menu
  navMenu.classList.toggle('active');

  // Optional: Animate the toggle button (burger to cross effect)
  navToggle.classList.toggle('open');
});






//contact-form-info

const scriptURL = 'https://script.google.com/macros/s/AKfycbxKORDA5ZC1UEyfpqH7UmlQhjM4uN1_ry9BHSHYwO87MHpfccIcx3ZCQHNDoiToxb2mug/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

// Initially hide the message box
msg.style.display = "none";

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Show the message box while processing
  msg.style.display = "flex";
  msg.innerHTML = "Sending...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully!";
      msg.style.backgroundColor = "rgba(97, 183, 82, 0.7)"; // Green success color
      
      // Hide the message box after 5 seconds
      setTimeout(function () {
        msg.style.display = "none";
        msg.innerHTML = "";
      }, 5000);

      form.reset(); // Reset the form fields
    })
    .catch(error => {
      msg.innerHTML = "Error sending message!";
      msg.style.backgroundColor = "rgba(255, 0, 0, 0.7)"; // Red error color
      
      // Hide the message box after 5 seconds
      setTimeout(function () {
        msg.style.display = "none";
        msg.innerHTML = "";
      }, 5000);

      console.error('Error!', error.message);
    });
});


