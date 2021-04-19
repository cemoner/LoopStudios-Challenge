var headerText = document.querySelector("#header-text-mobile");
var hamburgerMenu = document.querySelector("#hamburger-menu");
var hamburgerImage = document.querySelector("#hamburger-menu img");
var mobileHero = document.querySelector("#mobile-hero");
var mobileNav = document.querySelector("#mobileNav");

function close() {
  mobileHero.setAttribute("style", "visibility:visible;");
  mobileNav.setAttribute("style", "display:none;");
  headerText.setAttribute("style", "display:block");
  hamburgerImage.src = "images/icon-hamburger.svg";
  mobileNav.classList.remove("opened");
}

function open() {
  mobileNav.classList.add("opened");
  mobileHero.setAttribute("style", "visibility:hidden;");
  mobileNav.setAttribute("style", "display:block;");
  headerText.setAttribute("style", "display:none;");
  hamburgerImage.src = "images/icon-close.svg";
}

function mobileMenu() {
  if (mobileNav.classList.contains("opened")) {
    close();
  } else {
    open();
  }
}

hamburgerMenu.addEventListener("click", function () {
  mobileMenu();
});

var myWindow = window.matchMedia("(max-width:1023px)");
function closeMenu() {
  if (!myWindow.matches) {
    if (mobileNav.classList.contains("opened")) {
      close();
    }
  }
}
myWindow.addListener(function () {
  closeMenu();
});
