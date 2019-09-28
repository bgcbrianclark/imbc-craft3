// mobile nav operation
var headerNav = document.querySelector(".site-header");
function showMobileNav() {
  console.log(headerNav.classList);
  headerNav.classList.add("active");
}
function hideMobileNav() {
  headerNav.classList.remove("active");
}

var scrollObject = {};
window.addEventListener("scroll", throttle(getScrollPosition, 100));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

function getScrollPosition() {
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
  // If you want to check distance
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (scrollObject.y > 200) {
    if (viewportWidth < 992) {
      headerNav.classList.add("active");
    }
  } else {
    headerNav.classList.remove("active");
  }
}

// Mobile Social Button / Contact Nav function
function toggleContactMenu() {
  var nav = document.querySelector(".contact-nav"),
    navUl = nav.querySelector("ul");

  if (nav.classList.contains("menu--open")) {
    nav.classList.remove("menu--open");
  } else {
    nav.classList.add("menu--open");
  }
}

var navBtn = document.querySelector(".contactToggle");
navBtn.addEventListener("click", function() {
  toggleContactMenu();
});

// homepage scroll down button
var scrollTo = document.querySelector('main > section:first-of-type');
scrollTo.id = 'scrollTo';
