//reference to the HTML elements
const themeRadio = document.querySelectorAll('input[name="theme"]');

//get button value from form
const themeButton = document.getElementById('themeButton');
let black

//add an event lister to each radio button
themeRadio.forEach(radio => radio.addEventListener('click', setTheme));

//store the theme
function setTheme(e) {
    localStorage.setItem('theme', e.target.id);
}

//load the theme when the page loads
document.onload = loadTheme();

//restore the theme
function loadTheme() {
    //load theme contrast color
    const theme = localStorage.getItem('theme');
    if (theme) { // if there is a theme in local storage
        document.documentElement.className = theme;
        document.getElementById(theme).checked = true;
    } else {
        console.log("No theme on storage!");
    }

    //load background theme color from local storage
    const localTheme = localStorage.getItem('background-theme');
    if (localTheme) { //if there is a theme in local storage
        black = localTheme;
    } else { //else set it to default (dark theme)
        black = -1;
    }
    //set it as current theme
    setBackTheme();
}

//prevent default form submission
themeButton.addEventListener('click', function (e) {
    e.preventDefault();
    black *= -1;
    setBackTheme();
})

function setBackTheme() {
    if (black == 1) {
        document.body.classList.add("light")
        //console.log("light theme");
    } else if (black == -1) {
        document.body.classList.remove("light")
        //console.log("dark theme");
    }

    localStorage.setItem('background-theme', black);
}