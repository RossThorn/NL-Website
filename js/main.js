// Need to convert to include JQUERY
var navbar = document.getElementById("desktop-nav");
var buttons = document.getElementById("middle-wrapper").children;
var mobileNav = document.getElementById("mobile-nav");

var content = document.getElementById("content");

// Content for watchers
var header = document.getElementById("header");
var about = document.getElementById("about");
var music = document.getElementById("music");
var gallery = document.getElementById("gallery");
var merchandise = document.getElementById("merchandise");
var contact = document.getElementById("contact");
// var contentItems = document.getElementsByClassName("content-section")

var logo = document.getElementById("nav-logo");
var mobileLogo = document.getElementById("mobile-logo");

// var content = document.getElementById("media");

// Create content watchers
var headerWatcher = scrollMonitor.create(header);
var aboutWatcher = scrollMonitor.create(about);
var musicWatcher = scrollMonitor.create(music);
var galleryWatcher = scrollMonitor.create(gallery);
var merchandiseWatcher = scrollMonitor.create(merchandise);
var contactWatcher = scrollMonitor.create(contact);

var didScroll = false;

var menuShowing = false;

window.onscroll = checkHeader;

function checkHeader() {
    didScroll = true;
}

function main(){
  if (navigator.platform == "iPhone" || navigator.platform == "iPod" || navigator.platform == "iPad"){
    document.getElementById("dropdown-icon").style.display = "none";
  }

  headerWatcher.exitViewport(function(){
    barStick();
    if (window.innerWidth < 800){
      mobileLogo.style.opacity = 1;
    } else {
          about.style.paddingTop = "20vh";
        if (document.getElementsByClassName("about-overlay").length > 0) {
          document.getElementsByClassName("about-overlay")[0].style.marginTop = "10vh";
        }
    }
    if (document.getElementsByClassName("about-overlay").length > 0) {
      document.getElementsByClassName("about-overlay")[0].style.opacity = 1;
    }

  });

  headerWatcher.enterViewport(function(){
    barUnstick();
    if (window.innerWidth < 800){
      mobileLogo.style.opacity = 0;
    }
  });

  document.getElementById("cover").style.opacity = 1;
    // if (window.innerWidth < 400){
    //   document.getElementsByClassName("lightwidget-widget")[0].src = "http://lightwidget.com/widgets/2c470acc61a65905819dc1b826c5a12a.html";
    // }

}
function barStick() {
    logo.style.opacity = 1;
    navbar.classList.add("sticky");
    navbar.classList.remove("non-stick");
  }

  function barUnstick(){
    logo.style.opacity = "0";
    about.style.paddingTop = "10vh";
    navbar.classList.remove("sticky");
    navbar.classList.add("non-stick");
    navbar.style.backgroundColor = "#1f1f1f";

}

function dropdown(){
  if (menuShowing == false){
  document.getElementById("dropdown-content").style.display = "block";
  menuShowing = true;
} else {
  document.getElementById("dropdown-content").style.display = "none";
  menuShowing = false;
}
}


window.onload = main();
