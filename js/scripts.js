document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Theme";
  toggleButton.classList.add("toggle-btn");
  document.body.prepend(toggleButton);

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});

let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slider-image");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
document.addEventListener("DOMContentLoaded", showSlides);

function initMap() {
  const location = { lat: 41.881832, lng: -87.623177 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] }
    ]
  });
  new google.maps.Marker({
    position: location,
    map,
    title: "Illinois Institute of Technology"
  });
}
