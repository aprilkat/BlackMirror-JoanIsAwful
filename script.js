
// Moved the js code for the sticky navbar here to make it easier to use
// There are a lot of files in the directory and all of the pages need this code

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function () {
    myFunction()
};
