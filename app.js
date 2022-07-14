// get elements
const menuBtn = document.querySelector('.menu-btn');
const mobileMenuBox = document.querySelector('.mobile-menu-container');
const closeBtn = document.querySelector('.close-menu-btn');
const features = document.querySelector('.feature');
const company = document.querySelector('.company');
const featuresItem = document.querySelector('.dropdown-features');
const companyItem = document.querySelector('.dropdown-company');
const arrowFeature = document.querySelector('.arrow-feature');
const arrowCompany = document.querySelector('.arrow-company');

// open the menu
menuBtn.addEventListener("click", function (){
  mobileMenuBox.style.transform = "translateX(0)";
});

// close the menu
closeBtn.addEventListener("click", function (){
  mobileMenuBox.style.transform = "translateX(100%)";
  mobileMenuBox.style.transition = ".5s ease-in-out .2s";
});

// dropdown feaure item
features.addEventListener("click", function(){
  featuresItem.classList.toggle("show-dropdown");
  arrowFeature.classList.toggle("rotate");
});

// dropdown company item
company.addEventListener("click", function(){
  companyItem.classList.toggle("show-dropdown");
  arrowCompany.classList.toggle("rotate");
});
