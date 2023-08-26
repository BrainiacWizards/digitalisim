/****Theme picker****/
const themeOpt = document.querySelector("#themeOpt")

themeOpt.onchange = function theme() {

    if (themeOpt.value == "gg") {
        document.body.classList.remove("GP-theme")
        document.body.classList.remove("BP-theme")
        document.body.classList.remove("BG-theme")
        document.body.classList.add("GG-theme")
        console.log("theme GG");
    } else if (themeOpt.value == "gp") {
        document.body.classList.remove("GG-theme")
        document.body.classList.remove("BP-theme")
        document.body.classList.remove("BG-theme")
        document.body.classList.add("GP-theme")
        console.log("theme GP");
    } else if (themeOpt.value == "bg") {
        document.body.classList.remove("GG-theme")
        document.body.classList.remove("GP-theme")
        document.body.classList.remove("BP-theme")
        document.body.classList.add("BG-theme")
        console.log("theme BG");
    } else {
        document.body.classList.remove("GG-theme")
        document.body.classList.remove("GP-theme")
        document.body.classList.remove("BG-theme")
        document.body.classList.add("BP-theme")
        console.log("theme BP");
    }

}