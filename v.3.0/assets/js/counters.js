import * as gates from './gates.js'

var Dedge
var q0 = 0, q1 = 0, q2 = 0, q3 = 0
var d0 = 0, d1 = 0, d2 = 0, d3 = 0
var notq0 = 0, notq1 = 0, notq2 = 0, notq3 = 0
var q = 0, notq = 0, d

//declare button references
var Dbtn = document.querySelector('#d')
var q0Btn = document.querySelector('#q0')
var q1Btn = document.querySelector('#q1')
var q2Btn = document.querySelector('#q2')
var q3Btn = document.querySelector('#q3')
var asyncForm = document.querySelector('.counter-form')

//handle form submit
asyncForm.addEventListener('submit', function (e) {
    e.preventDefault()

    q0 = 0
    q1 = 0
    q2 = 0
    q3 = 0

    async()
})

alert("Beta!: this feature is till experimental")

function async() {
    //set edge
    Dedge = gates.clock()

    //for 1st flip flop
    q0Btn.innerText = "Q0: " + q0
    d0 = gates.notGate(q0)
    q0 = dFlipFlop(Dedge, d0)

    
    //for 2nd flip flop
    q1Btn.innerText = "Q1: " + q1
    d1 = gates.notGate(q1)
    q1 = dFlipFlop(q0, d1)

    //for 3rd flip flop
    q2Btn.innerText = "Q2: " + q2
    d2 = gates.notGate(q2)
    q2 = dFlipFlop(q1, d2)

    //for 4th flip flop
    q3Btn.innerText = "Q3: " + q3
    d3 = gates.notGate(q3)
    q3 = dFlipFlop(q2, d3)

    window.requestAnimationFrame(async)
}

function dFlipFlop(clk, d) {
    if (clk == 1) {
        q = d
        d = gates.notGate(q)
    }
    else {
        q = q
        d = gates.notGate(q)
    }

    //console.log("flipflop called");
    return q
}

