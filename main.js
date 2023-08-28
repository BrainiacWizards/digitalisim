//reference to the HTML elements
const themeRadio = document.querySelectorAll('input[name="theme"]');

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
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.documentElement.className = theme;
        document.getElementById(theme).checked = true;
    } else{
        console.log("No theme on storage!");
    }
}

