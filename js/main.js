// Need to convert to include JQUERY
var navbar = document.getElementById("menu-bar");
var buttons = document.getElementById("middle-wrapper").children;

// Content for watchers
var header = document.getElementById("header");
var about = document.getElementById("about");
var music = document.getElementById("music");
var gallery = document.getElementById("gallery");
var merchandise = document.getElementById("merchandise");
var contact = document.getElementById("contact");

var logo = document.getElementById("nav-logo");

// var content = document.getElementById("media");

// Create content watchers
var headerWatcher = scrollMonitor.create(header);
var aboutWatcher = scrollMonitor.create(about);
var musicWatcher = scrollMonitor.create(music);
var galleryWatcher = scrollMonitor.create(gallery);
var merchandiseWatcher = scrollMonitor.create(merchandise);
var contactWatcher = scrollMonitor.create(contact);

var didScroll = false;

window.onscroll = checkHeader;

function checkHeader() {
    didScroll = true;
}

function main(){

  if (headerWatcher.isAboveViewport){
    barStick();
  }

  aboutWatcher.fullyEnterViewport(function(){
    barStick();
  });

  headerWatcher.enterViewport(function(){
    barUnstick();
  });

  document.getElementById("cover").style.opacity = 1;
  console.log(window.innerWidth);
    if (window.innerWidth < 400){
      // console.log(document.getElementsByClassName("lightwidget-widget")[0].src);
      document.getElementsByClassName("lightwidget-widget")[0].src = "http://lightwidget.com/widgets/2c470acc61a65905819dc1b826c5a12a.html";
    }

}
function barStick() {
    logo.style.opacity = "1";

    navbar.classList.add("sticky");
    navbar.classList.remove("non-stick");
    // about.style.paddingTop = "10vh";
    // navbar.style.backgroundColor = "#333333";
  }

  function barUnstick(){
    logo.style.opacity = "0";
    navbar.classList.remove("sticky");
    navbar.classList.add("non-stick");
    navbar.style.backgroundColor = "#1f1f1f";
    // about.style.paddingTop = "0";

}


window.onload = main();
