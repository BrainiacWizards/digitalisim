//import
import * as gates from './gates.js'

//variables
var q0 = 0, q1 = 0, q2 = 0, q3 = 0
var j = 1, k = 1, Dedge = 1
var prevQ0 = 0, prevQ1 = 0, prevQ2 = 0, prevQ3 = 0

//declare button references
var q0Btn = document.querySelector('#q0')
var q1Btn = document.querySelector('#q1')
var q2Btn = document.querySelector('#q2')
var q3Btn = document.querySelector('#q3')
var sync_start = document.querySelector('#sync_start')
var syncstart = -1

//handle form submit
sync_start.addEventListener('click', function (e) {
    syncstart *= -1
    //reset the flip flops
    q0 = 0
    q0Btn.innerHTML = q0
    q1 = 0
    q1Btn.innerHTML = q1
    q2 = 0
    q2Btn.innerHTML = q2
    q3 = 0
    q3Btn.innerHTML = q3

    resetTable() //reset table gefore generating new one
    sync()
})

//alert("Beta!: this feature is till experimental")

function sync() {

    if (syncstart == 1) {

        /*since the clock is the same for all, and loading happens before the clock
        , we have to set the previous values before the they are modified*/
        prevQ0 = q0
        prevQ1 = q1
        prevQ2 = q2
        prevQ3 = q3
        //set edge
        Dedge = gates.clock()
        //console.log(Dedge);

        /******1st flip flop*******/
        q0 = flipFlop(Dedge, q0, 1)
        q0Btn.innerHTML = q0

        /******2nd flip flop*******/
        if (prevQ0 == 1) {
            q1 = flipFlop(Dedge, q1, 1)
            q1Btn.innerHTML = q1
        }

        /******3rd flip flop*******/
        if (gates.andGate(prevQ0, prevQ1) == 1) {
            q2 = flipFlop(Dedge, q2, 1)
            q2Btn.innerHTML = q2
        }

        /******4th flip flop*******/
        if (gates.andGate(gates.andGate(prevQ0, prevQ1), prevQ2) == 1) {
            q3 = flipFlop(Dedge, q3, 1)
            q3Btn.innerHTML = q3
        }

        //truthtable
        if (Dedge == 1) {
            truthTable(q0, q1, q2, q3)
        }

        //stop at 15 (maximum count of 4 bit counter)
        if(!(q0 == 1 && q1 == 1 && q2 == 1 && q3 == 1)){
            window.requestAnimationFrame(sync)
        }
    }
}

/*****flip flop function*****/
function flipFlop(clk, q, high) {
    j = high
    k = high

    if (clk == 1 && j == 1 && k == 1) { //toggle
        q = gates.notGate(q)
    }

    return q
}

///*******Truth table variables*****************/
//reference truth table
const tbody = document.querySelector(".tt_body")

//reset table before generating new one
function resetTable() {
    tbody.innerHTML = `
    <tr class="tt_row">
          <td class="tt_data">
            Q3
          </td>
          <td class="tt_data">
          Q2
          </td>
          <td class="tt_data">
          Q1
          </td>
          <td class="tt_data">
          Q0
          </td>
        </tr>
        `
}

/***********************Generate Truth-Table***********************/
function truthTable(q0, q1, q2, q3) {
    console.clear()

    //DOM Operation
    tbody.innerHTML += `
        <tr class="tt_row">
          <td class="tt_data">
            ${q3}
          </td>
          <td class="tt_data">
          ${q2}
          </td>
          <td class="tt_data">
          ${q1}
          </td>
          <td class="tt_data">
          ${q0}
          </td>
        </tr>
        `

    //call timing diagram funciton on canvas.js
    //canvas.drawCanvas()
}
