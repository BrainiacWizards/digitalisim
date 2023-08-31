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


        window.requestAnimationFrame(sync)
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

