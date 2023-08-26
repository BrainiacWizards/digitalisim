import * as gates from "./gates.js"

var A, B
var hfAin = null, hfBin = null, hfSum = null, hfCout = null
var Aarr = [], Barr = [], Sarr = [], CoutArr = [], CinArr = [0]

const tt_bodyHA = document.querySelector(".tt_bodyHA")
const tt_bodyFA = document.querySelector(".tt_bodyFA")

/***logic option****/
const log_opt = document.querySelector("#logic_options")
const fulladder = document.querySelector("#fulladder")
const halfadder = document.querySelector("#halfadder")
var prev_opt

logicOpt()
function logicOpt() {

    if (log_opt.value == "full_add") {
        fulladder.style.display = "block"
        halfadder.style.display = "none"
    } else if (log_opt.value == "half_add") {
        halfadder.style.display = "block"
        fulladder.style.display = "none"
    } else if (log_opt.value == "4bit_add") {
        //fourBitAdder()
    } else {
        halfadder.style.display = "none"
        fulladder.style.display = "none"
    }

    //constantly check for the selected option
    window.requestAnimationFrame(logicOpt)

}

//form
const form = document.querySelector("form")

//add event listner for form onsubmit and call onFormSubmit()
form.addEventListener('submit', function (e) {
    e.preventDefault()
    onFormSubmit()
})

function onFormSubmit() {
    A = document.querySelector("#A").value
    B = document.querySelector("#B").value

    //call the truthable generator function
    if (log_opt.value == "full_add") {
        fullAdder()
    } else if (log_opt.value == "half_add") {
        halfAdder()
    }
}

//function for reseting the table before generating new content
function reset() {
    console.clear()

    Sarr = []
    CoutArr = []
    CinArr = [0]
    hfAin = null
    hfBin = null
    Aarr = []
    Barr = []

    if (log_opt.value == "half_add") {
        tt_bodyHA.innerHTML = `
        <tr class="title_row">
            <td class="tt_data title_col">
                <p></p>
            </td>
            <td class="tt_data colA">
                <p>A</p>
            </td>
            <td class="tt_data colB">
                <p>B</p>
            </td>
            <td class="tt_data colC">
                <p>Sum</p>
            </td>
            <td class="tt_data colD">
                <p>Cout</p>
            </td>
        </tr>
    `
    }

    if (log_opt.value == "full_add") {
        tt_bodyFA.innerHTML = `
        <tr class="title_row">
            <td class="tt_data colA">
                <p>A</p>
            </td>
            <td class="tt_data colB">
                <p>B</p>
            </td>
            <td class="tt_data colB">
                <p>Cin</p>
            </td>
            <td class="tt_data colC">
                <p>Sum</p>
            </td>
            <td class="tt_data colD">
                <p>Cout</p>
            </td>
        </tr>
    `
    }
}

//check if A and b are equal in length, if not make them
function checkEqual() {
    if (A.length < B.length) {
        A = A.padStart(B.length, "0")
    }
    if (A.length > B.length) {
        B = B.padStart(A.length, "0")
    }
}

//truthable generator function
function halfAdder() {
    reset()

    checkEqual()
    Aarr = A.split("")
    Barr = B.split("")

    //logic for Cout
    for (let i = 0; i < Aarr.length; i++) {
        //console.log(i);
        hfAin = Aarr[i]
        hfBin = Barr[i]

        CoutArr[i] = gates.andGate(hfAin, hfBin)
        Sarr[i] = gates.xorGate(hfAin, hfBin)

        tt_bodyHA.innerHTML += `
        <tr class="tt_row">
        <td class="tt_data colA">
            ${i}
        </td>
          <td class="tt_data colA">
            ${Aarr[i]}
          </td>
          <td class="tt_data colB">
          ${Barr[i]}
          </td>
          <td class="tt_data colC">
          ${Sarr[i]}
          </td>
          <td class="tt_data colD">
          ${CoutArr[i]}
          </td>
        </tr>
        `
    }
    console.log("Arr: " + Aarr)
    console.log("Barr: " + Barr);
    console.log("Sarr: " + Sarr);
    console.log("CoutArr: " + CoutArr);

}

function fullAdder() {
    reset()

    checkEqual()
    Aarr = A.split("")
    Barr = B.split("")

    //logic for Cout
    for (let i = 0; i < Aarr.length; i++) {
        hfAin = Aarr[i]
        hfBin = Barr[i]

        Sarr[i] = gates.xorGate(gates.xorGate(hfAin, hfBin), CinArr[i])
        CoutArr[i] = gates.orGate(gates.andGate(hfAin, hfBin), gates.andGate(gates.xorGate(hfAin, hfBin), CinArr[i]))
        CinArr[i + 1] = CoutArr[i]

        tt_bodyFA.innerHTML += `
        <tr class="tt_row">
    
          <td class="tt_data colA">
            ${Aarr[i]}
          </td>
          <td class="tt_data colB">
          ${Barr[i]}
          </td>
          <td class="tt_data colC">
          ${CinArr[i]}
          </td>
          <td class="tt_data colC">
          ${Sarr[i]}
          </td>
          <td class="tt_data colD">
          ${CoutArr[i]}
          </td>
        </tr>
        `
    }
    console.log("Arr: " + Aarr)
    console.log("Barr: " + Barr);
    console.log("Sarr: " + Sarr);
    console.log("CinArr: " + CinArr);
    console.log("CoutArr: " + CoutArr);
}

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