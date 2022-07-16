let logInBtn = document.getElementById("log-in-btn");
let topNav = document.querySelector(".top_nav");
let search = document.querySelector(".search-con");
let searchBtn = document.getElementById("ser-icon");
let closeSearch = document.querySelector(".close");
let navBtn = document.getElementById("toggle-nav-btn");
let sideNav = document.querySelector(".toggle-menu");
let closeSideNav = document.querySelector(".close-side-nav");

window.addEventListener("scroll", function () {
  topNav.classList.toggle("active", window.scrollY > 0);
});

window.onload = changeLogIn;
window.onresize = changeLogIn;

// show search
searchBtn.onclick = searchShowHide;
// close search
closeSearch.onclick = searchShowHide;

// show side navbar
navBtn.onclick = sideNaveShowHide;
// hide side navbar
closeSideNav.onclick = sideNaveShowHide;

function changeLogIn() {
  if (window.innerWidth <= 768) {
    logInBtn.innerHTML = `<i class="uil uil-user"></i>`;
    logInBtn.classList = "btn-sec";
  } else {
    logInBtn.innerHTML = `<i class="uil uil-user"></i> Login / Register`;
    logInBtn.classList = "btn";
  }
}

function searchShowHide(e) {
  search.classList.toggle("active");
  e.preventDefault();
}

function sideNaveShowHide(e) {
  sideNav.classList.toggle("active");
  e.preventDefault();
}
