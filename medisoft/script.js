const getlocation = () => {
    //alert("getting user location");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log((position));
        });
    }
};
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const signupLink = document.getElementById("signupLink");

  // Add event listener for form submission
  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get username and password values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Your login logic here
      // For demonstration, let's just log the username and password
      console.log("Username:", username);
      console.log("Password:", password);

      // Clear input fields after submission (optional)
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
  });

  // Add event listener for sign up link
  signupLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Redirect or toggle to sign up page
      // For demonstration, let's just log a message
      console.log("Redirecting to sign up page...");
  });
});

