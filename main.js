let logInBtn = document.getElementById("log-in-btn");
let topNav = document.querySelector(".top_nav");

console.log(topNav);

window.onload = function () {
  changeLogIn();
  window.onresize = function () {
    changeLogIn();
  };
};
window.onscroll = function () {
  fixNav();
};

function changeLogIn() {
  if (window.innerWidth <= 768) {
    logInBtn.innerHTML = `<i class="uil uil-user"></i>`;
    logInBtn.classList = "btn-sec";
  } else {
    logInBtn.innerHTML = `<i class="uil uil-user"></i> Login / Register`;
    logInBtn.classList = "btn";
  }
}

function fixNav() {
  if (window.scrollY >= 10) {
    topNav.classList.add("active");
  } else {
    topNav.classList.remove("active");
  }
}
