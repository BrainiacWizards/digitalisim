import * as gates from './gates.js';
import * as canvas from './canvas.js';
if ( !sessionStorage.getItem( 'loggedIn' ) ) {
    //redirect to main page
    window.location.href = "./login.html";
}
//get variable from index.html
//selctor inputs
//row 1
const in1A1 = document.querySelector( "#in1A1" );
const in2A1 = document.querySelector( "#in2A1" );
const in1C1 = document.querySelector( "#in1C1" );
const in2C1 = document.querySelector( "#in2C1" );
//row 2
const in1A2 = document.querySelector( "#in1A2" );
const in2A2 = document.querySelector( "#in2A2" );
const in1C2 = document.querySelector( "#in1C2" );
const in2C2 = document.querySelector( "#in2C2" );
//row 3
const in1A3 = document.querySelector( "#in1A3" );
const in2A3 = document.querySelector( "#in2A3" );
const in1C3 = document.querySelector( "#in1C3" );
const in2C3 = document.querySelector( "#in2C3" );
//row 4
const in1A4 = document.querySelector( "#in1A4" );
const in2A4 = document.querySelector( "#in2A4" );
const in1C4 = document.querySelector( "#in1C4" );
const in2C4 = document.querySelector( "#in2C4" );
//row 5
const in1A5 = document.querySelector( "#in1A5" );
const in2A5 = document.querySelector( "#in2A5" );
const in1C5 = document.querySelector( "#in1C5" );
const in2C5 = document.querySelector( "#in2C5" );
//row 6
const in1A6 = document.querySelector( "#in1A6" );
const in2A6 = document.querySelector( "#in2A6" );
const in1C6 = document.querySelector( "#in1C6" );
const in2C6 = document.querySelector( "#in2C6" );

//now for inputs based on selector option
var in1a1 = null, in2a1 = null, in1c1 = null, in2c1 = null;
var in1a2 = null, in2a2 = null, in1c2 = null, in2c2 = null;
var in1a3 = null, in2a3 = null, in1c3 = null, in2c3 = null;

var in1a4 = null, in2a4 = null, in1c4 = null, in2c4 = null;
var in1a5 = null, in2a5 = null, in1c5 = null, in2c5 = null;
var in1a6 = null, in2a6 = null, in1c6 = null, in2c6 = null;


//gates
const B1 = document.querySelector( "#B1" );
const B2 = document.querySelector( "#B2" );
const B3 = document.querySelector( "#B3" );
const B4 = document.querySelector( "#B4" );
const B5 = document.querySelector( "#B5" );
const B6 = document.querySelector( "#B6" );
const D1 = document.querySelector( "#D1" );
const D2 = document.querySelector( "#D2" );
const D3 = document.querySelector( "#D3" );
const D4 = document.querySelector( "#D4" );
const D5 = document.querySelector( "#D5" );
const D6 = document.querySelector( "#D6" );

//outputs
var B1o = null, B2o = null, B3o = null, B4o = null, B5o = null, B6o = null;
var D1o = null, D2o = null, D3o = null, D4o = null, D5o = null, D6o = null;

var outputR1 = null, outputR2 = null, outputR3 = null;
var outputR4 = null, outputR5 = null, outputR6 = null;
var output = null;

//set row outputs arrays
var R1arr = [], R2arr = [], R3arr = [], R4arr = [], R5arr = [], R6arr = [];

//input values
var A = null, B = null, C = null, D = null;
var aCheck = [], bCheck = [], cCheck = [], dCheck = [];

//truthable variables
export var genOut = [];
export var genInA = [], genInB = [], genInC = [], genInD = [];

//row output buttons
const row1btn = document.querySelector( "#row1btn" );
const row2btn = document.querySelector( "#row2btn" );
const row3btn = document.querySelector( "#row3btn" );
const row4btn = document.querySelector( "#row4btn" );
const row5btn = document.querySelector( "#row5btn" );
const row6btn = document.querySelector( "#row6btn" );

//number of inputs variable
const no_inputs = document.querySelector( "#no_inputs" );
export var noIns = no_inputs.value;
//reference truth table
const tbody = document.querySelector( ".tt_body" );
var htmlContent = '';

//Boolean expression variable
var SOP_StringArray = [];
var SOP_BinArray = [];
const SOP_String = document.querySelector( "#sop_exp_string" );
const SOP_Bin = document.querySelector( "#sop_exp_bin" );
var POS_StringArray = [];
var POS_BinArray = [];
const POS_String = document.querySelector( "#pos_exp_string" );
const POS_Bin = document.querySelector( "#pos_exp_bin" );


/***********************Row 1***********************/
function row1 () {
    /***************Input logic for B1***********************/
    if ( in1A1.value == "A" ) { //input 1 on A1
        in1a1 = A;
        aCheck.push( 1 );
    } else if ( in1A1.value == "notA" ) {
        in1a1 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A1.value == "B" ) {
        in1a1 = B;
        bCheck.push( 1 );
    } else if ( in1A1.value == "notB" ) {
        in1a1 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A1.value == "C" ) {
        in1a1 = C;
        cCheck.push( 1 );
    } else if ( in1A1.value == "notC" ) {
        in1a1 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A1.value == "D" ) {
        in1a1 = D;
        dCheck.push( 1 );
    } else if ( in1A1.value == "notD" ) {
        in1a1 = gates.notGate( D );
        dCheck.push( 1 );
    }
    if ( in2A1.value == "A" ) { //input 2 on A1
        in2a1 = A;
        aCheck.push( 1 );
    } else if ( in2A1.value == "notA" ) {
        in2a1 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A1.value == "B" ) {
        in2a1 = B;
        bCheck.push( 1 );
    } else if ( in2A1.value == "notB" ) {
        in2a1 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A1.value == "C" ) {
        in2a1 = C;
        cCheck.push( 1 );
    } else if ( in2A1.value == "notC" ) {
        in2a1 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A1.value == D ) {
        in2a1 = D;
        dCheck.push( 1 );
    } else if ( in2A1.value == "notD" ) {
        in2a1 = gates.notGate( D );
        dCheck.push( 1 );
    }

    //log Column A inputs
    //console.log("in1a1: " + in1a1 + " in2a1: " + in2a1)

    /***************Output logic for B1***********************/

    if ( B1.value != "null" && in1a1 != null && in2a1 != null ) { //output for B1
        if ( B1.value == "AND" ) {
            B1o = gates.andGate( in1a1, in2a1 );
        }
        else if ( B1.value == "OR" ) {
            B1o = gates.orGate( in1a1, in2a1 );
        } else if ( B1.value == "NAND" ) {
            B1o = gates.nandGate( in1a1, in2a1 );
        } else if ( B1.value == "NOR" ) {
            B1o = gates.norGate( in1a1, in2a1 );
        } else if ( B1.value == "XOR" ) {
            B1o = gates.xorGate( in1a1, in2a1 );
        }
    } else {
        B1o = null; //if no gate is selected and both inputs are not chosen
    }

    //set the output of row1 after 1st logic gate
    outputR1 = B1o;

    /***************input logic for D1***********************/
    if ( in1C1.value == "A" ) { //input 1 on C1
        in1c1 = A;
        aCheck.push( 1 );
    } else if ( in1C1.value == "notA" ) {
        in1c1 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1C1.value == "B" ) {
        in1c1 = B;
        bCheck.push( 1 );
    } else if ( in1C1.value == "notB" ) {
        in1c1 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C1.value == "C" ) {
        in1c1 = C;
        cCheck.push( 1 );
    } else if ( in1C1.value == "notC" ) {
        in1c1 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C1.value == "D" ) {
        in1c1 = D;
        dCheck.push( 1 );
    } else if ( in1C1.value == "notC" ) {
        in1c1 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C1.value == "R1o" ) {
        in1c1 = B1o;
    } else if ( in1C1.value == "notB1o" ) {
        in1c1 = gates.notGate( B1o );
    }
    if ( in2C1.value == "A" ) { //input 2 on C1
        in2c1 = A;
        aCheck.push( 1 );
    } else if ( in2C1.value == "notA" ) {
        in2c1 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C1.value == "B" ) {
        in2c1 = B;
        bCheck.push( 1 );
    } else if ( in2C1.value == "notB" ) {
        in2c1 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C1.value == "C" ) {
        in2c1 = C;
        cCheck.push( 1 );
    } else if ( in2C1.value == "notC" ) {
        in2c1 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C1.value == "D" ) {
        in2c1 = D;
        dCheck.push( 1 );
    } else if ( in2C1.value == "notD" ) {
        in2c1 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C1.value == "R1o" ) {
        in1c1 = B1o;
    } else if ( in2C1.value == "notR1o" ) {
        in2c1 = gates.notGate( B1o );
    }
    //log Column A inputs
    //console.log("in1c1: " + in1c1 + " in2c1: " + in2c1)

    /***************Output logic for D1***********************/
    if ( outputR1 != null ) { //if the previous gate (B1) had an output
        if ( D1.value != "null" && in1c1 != null && in2c1 != null ) {
            if ( D1.value == "AND" ) {
                D1o = gates.andGate( in1c1, in2c1 );
            } else if ( D1.value == "OR" ) {
                D1o = gates.orGate( in1c1, in2c1 );
            } else if ( D1.value == "NAND" ) {
                D1o = gates.nandGate( in1c1, in2c1 );
            } else if ( D1.value == "NOR" ) {
                D1o = gates.norGate( in1c1, in2c1 );
            } else if ( D1.value == "XOR" ) {
                D1o = gates.xorGate( in1c1, in2c1 );
            } else if ( D1.value == "XOR" ) {
                D1o = gates.xorGate( in1c1, in2c1 );
            }
            outputR1 = D1o; //reset the output of row 1
        } else { //if gate B1 is selected but D1 is not, output is the prev gate
            D1o = null;
            outputR1 = outputR1;
        }
    } else { //if there is no prev gate (B1), output is null
        D1o = null;
        B1o = null;
        outputR1 = null;
    }

}
/***********************Row 2***********************/
function row2 () {
    /***************Input logic for B2***********************/
    if ( in1A2.value == "A" ) { //input 1 on A2
        in1a2 = A;
        aCheck.push( 1 );
    } else if ( in1A2.value == "notA" ) {
        in1a2 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A2.value == "B" ) {
        in1a2 = B;
        bCheck.push( 1 );
    } else if ( in1A2.value == "notB" ) {
        in1a2 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A2.value == "C" ) {
        in1a2 = C;
        cCheck.push( 1 );
    } else if ( in1A2.value == "notC" ) {
        in1a2 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A2.value == "D" ) {
        in1a2 = D;
        dCheck.push( 1 );
    } else if ( in1A2.value == "notD" ) {
        in1a2 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1A2.value == "R1o" ) {
        in1a2 = outputR1;
    } else if ( in1A2.value == "notR1o" ) {
        in1a2 = gates.notGate( outputR1 );
    }

    if ( in2A2.value == "A" ) { //input 2 on A2
        in2a2 = A;
        aCheck.push( 1 );
    } else if ( in2A2.value == "notA" ) {
        in2a2 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A2.value == "B" ) {
        in2a2 = B;
        bCheck.push( 1 );
    } else if ( in2A2.value == "notB" ) {
        in2a2 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A2.value == "C" ) {
        in2a2 = C;
        cCheck.push( 1 );
    } else if ( in2A2.value == "notC" ) {
        in2a2 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A2.value == "D" ) {
        in2a2 = D;
        dCheck.push( 1 );
    } else if ( in2A2.value == "notD" ) {
        in2a2 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2A2.value == "R1o" ) {
        in2a2 = outputR1;
    } else if ( in2A2.value == "notR1o" ) {
        in2a2 = gates.notGate( outputR1 );
    }

    /***************Output logic for B2***********************/
    if ( B2.value != "null" && in1a2 != null && in2a2 != null ) { //output for B2
        if ( B2.value == "AND" ) {
            B2o = gates.andGate( in1a2, in2a2 );
        }
        else if ( B2.value == "OR" ) {
            B2o = gates.orGate( in1a2, in2a2 );
        } else if ( B2.value == "NAND" ) {
            B2o = gates.nandGate( in1a2, in2a2 );
        } else if ( B2.value == "NOR" ) {
            B2o = gates.norGate( in1a2, in2a2 );
        } else if ( B2.value == "XOR" ) {
            B2o = gates.xorGate( in1a2, in2a2 );
        }
    } else {
        B2o = null; //if no gate is not selected and both inputs are not chosen
    }

    //set the output for row 2
    outputR2 = B2o;

    /***************input logic for D2***********************/
    if ( in1C2.value == "A" ) { //input 1 on C2
        in1c2 = A;
        aCheck.push( 1 );
        bCheck.push( 0 );
        cCheck.push( 0 );
    } else if ( in1C2.value == "notA" ) {
        in1c2 = gates.notGate( A );
        aCheck.push( 1 );
        bCheck.push( 0 );
        cCheck.push( 0 );
    } else if ( in1C2.value == "B" ) {
        in1c2 = B;
        aCheck.push( 0 );
        bCheck.push( 1 );
        cCheck.push( 0 );
    } else if ( in1C2.value == "notB" ) {
        in1c2 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C2.value == "C" ) {
        in1c2 = C;
        cCheck.push( 1 );
    } else if ( in1C2.value == "notC" ) {
        in1c2 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C2.value == "D" ) {
        in1c2 = D;
        dCheck.push( 1 );
    } else if ( in1C2.value == "notD" ) {
        in1c2 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C2.value == "R1o" ) {
        in1c2 = outputR1;
    } else if ( in1C2.value == "notR1o" ) {
        in1c2 = gates.notGate( outputR1 );
    } else if ( in1C2.value == "R2o" ) {
        in1c2 = B2o;
    } else if ( in1C2.value == "notR2o" ) {
        in1c2 = gates.notGate( B2o );
    }
    if ( in2C2.value == "A" ) { //input 2 on C2
        in2c2 = A;
        aCheck.push( 1 );
    } else if ( in2C2.value == "notA" ) {
        in2c2 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C2.value == "B" ) {
        in2c2 = B;
        bCheck.push( 1 );
    } else if ( in2C2.value == "notB" ) {
        in2c2 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C2.value == "C" ) {
        in2c2 = C;
        cCheck.push( 1 );
    } else if ( in2C2.value == "notC" ) {
        in2c2 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C2.value == "D" ) {
        in2c2 = D;
        dCheck.push( 1 );
    } else if ( in2C2.value == "notD" ) {
        in2c2 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C2.value == "R1o" ) {
        in1c2 = outputR1;
    } else if ( in2C2.value == "notR1o" ) {
        in2c2 = gates.notGate( outputR1 );
    } else if ( in2C2.value == "R2o" ) {
        in1c2 = B2o;
    } else if ( in2C2.value == "notR2o" ) {
        in2c2 = gates.notGate( B2o );
    }

    //log Column A inputs
    //console.log("in1c2: " + in1c2 + " in2c2: " + in2c2)

    /***************Output logic for D2***********************/
    if ( outputR2 != null ) {
        if ( D2.value != "null" && in1c2 != null && in2c2 != null ) {
            if ( D2.value == "AND" ) {
                D2o = gates.andGate( in1c2, in2c2 );
            } else if ( D2.value == "OR" ) {
                D2o = gates.orGate( in1c2, in2c2 );
            } else if ( D2.value == "NAND" ) {
                D2o = gates.nandGate( in1c2, in2c2 );
            } else if ( D2.value == "NOR" ) {
                D2o = gates.norGate( in1c2, in2c2 );
            } else if ( D2.value == "XOR" ) {
                D2o = gates.xorGate( in1c2, in2c2 );
            }
            outputR2 = D2o;
        } else {
            D2o = null;
            outputR2 = B2o; //if gate B2 is selected but D2 is not, output is the prev gate
        }
    } else {
        D2o = null;
        outputR2 = null; //if there is no prev gate (B2), output is null
    }
}
/***********************Row 3***********************/
function row3 () {
    /***************Input logic for B3***********************/
    if ( in1A3.value == "A" ) { //input 1 on A3
        in1a3 = A;
        aCheck.push( 1 );
    } else if ( in1A3.value == "notA" ) {
        in1a3 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A3.value == "B" ) {
        in1a3 = B;
        bCheck.push( 1 );
    } else if ( in1A3.value == "notB" ) {
        in1a3 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A3.value == "C" ) {
        in1a3 = C;
        cCheck.push( 1 );
    } else if ( in1A3.value == "notC" ) {
        in1a3 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A3.value == "D" ) {
        in1a3 = D;
        dCheck.push( 1 );
    } else if ( in1A3.value == "notD" ) {
        in1a3 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1A3.value == "R1o" ) {
        in1a3 = outputR1;
    } else if ( in1A3.value == "notR1o" ) {
        in1a3 = gates.notGate( outputR1 );
    } else if ( in1A3.value == "R2o" ) {
        in1a3 = outputR2;
    } else if ( in1A3.value == "notR2o" ) {
        in1a3 = gates.notGate( outputR2 );
    }
    if ( in2A3.value == "A" ) { //input 2 on A3
        in2a3 = A;
        aCheck.push( 1 );
    } else if ( in2A3.value == "notA" ) {
        in2a3 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A3.value == "B" ) {
        in2a3 = B;
        bCheck.push( 1 );
    } else if ( in2A3.value == "notB" ) {
        in2a3 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A3.value == "C" ) {
        in2a3 = C;
        cCheck.push( 1 );
    } else if ( in2A3.value == "notC" ) {
        in2a3 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A3.value == "D" ) {
        in2a3 = D;
        dCheck.push( 1 );
    } else if ( in2A3.value == "notD" ) {
        in2a3 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2A3.value == "R1o" ) {
        in2a3 = outputR1;
    } else if ( in2A3.value == "notR1o" ) {
        in2a3 = gates.notGate( outputR1 );
    } else if ( in2A3.value == "R2o" ) {
        in2a3 = outputR2;
    } else if ( in2A3.value == "notR2o" ) {
        in2a3 = gates.notGate( outputR2 );
    }

    /**log row 3 values
    console.log("B3: " + B3.value);
    console.log("in1a3: " + in1a3 + " in2a3: " + in2a3)**/

    /***************Output logic for B3***********************/
    if ( B3.value != "null" && in1a3 != null && in2a3 != null ) { //output for B3

        if ( B3.value == "AND" ) {
            B3o = gates.andGate( in1a3, in2a3 );
        }
        else if ( B3.value == "OR" ) {
            B3o = gates.orGate( in1a3, in2a3 );
        } else if ( B3.value == "NAND" ) {
            B3o = gates.nandGate( in1a3, in2a3 );
        } else if ( B3.value == "NOR" ) {
            B3o = gates.norGate( in1a3, in2a3 );
        } else if ( B3.value == "XOR" ) {
            B3o = gates.xorGate( in1a3, in2a3 );
        }
    } else {
        B3o = null; //if no gate is not selected and both inputs are not chosen
    }

    //set the output for row 3
    outputR3 = B3o;

    /***************input logic for D3***********************/
    if ( in1C3.value == "A" ) { //input 1 on C3
        in1c3 = A;
        aCheck.push( 1 );
    } else if ( in1C3.value == "notA" ) {
        in1c3 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1C3.value == "B" ) {
        in1c3 = B;
        bCheck.push( 1 );
    } else if ( in1C3.value == "notB" ) {
        in1c3 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C3.value == "C" ) {
        in1c3 = C;
        cCheck.push( 1 );
    } else if ( in1C3.value == "notC" ) {
        in1c3 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C3.value == "D" ) {
        in1c3 = D;
        dCheck.push( 1 );
    } else if ( in1C3.value == "notD" ) {
        in1c3 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C3.value == "R1o" ) {
        in1c3 = outputR1;
    } else if ( in1C3.value == "notR1o" ) {
        in1c3 = gates.notGate( outputR1 );
    } else if ( in1C3.value == "R2o" ) {
        in1c3 = outputR2;
    } else if ( in1C3.value == "notR2o" ) {
        in1c3 = gates.notGate( outputR2 );
    } else if ( in1C3.value == "R3o" ) {
        in1c3 = B3o;
    } else if ( in1C3.value == "notR3o" ) {
        in1c3 = gates.notGate( B3o );
    }
    if ( in2C3.value == "A" ) { //input 2 on C2
        in2c3 = A;
        aCheck.push( 1 );
    } else if ( in2C3.value == "notA" ) {
        in2c3 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C3.value == "B" ) {
        in2c3 = B;
        bCheck.push( 1 );
    } else if ( in2C3.value == "notB" ) {
        in2c3 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C3.value == "C" ) {
        in2c3 = C;
        cCheck.push( 1 );
    } else if ( in2C3.value == "notC" ) {
        in2c3 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C3.value == "D" ) {
        in2c3 = D;
        dCheck.push( 1 );
    } else if ( in2C3.value == "notD" ) {
        in2c3 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C3.value == "R1o" ) {
        in1c3 = outputR1;
    } else if ( in2C3.value == "notR1o" ) {
        in2c3 = gates.notGate( outputR1 );
    } else if ( in2C3.value == "R2o" ) {
        in1c3 = outputR2;
    } else if ( in2C3.value == "notR2o" ) {
        in2c3 = gates.notGate( outputR2 );
    } else if ( in2C3.value == "R3o" ) {
        in1c3 = B3o;
    } else if ( in2C3.value == "notR3o" ) {
        in2c3 = gates.notGate( B3o );
    }

    /***************Output logic for D3***********************/
    if ( B3o != null ) { //if prev gate has an output
        if ( D3.value != "null" && in1c3 != null && in2c3 != null ) {
            if ( D3.value == "AND" ) {
                D3o = gates.andGate( in1c3, in2c3 );
            } else if ( D3.value == "OR" ) {
                D3o = gates.orGate( in1c3, in2c3 );
            } else if ( D3.value == "NAND" ) {
                D3o = gates.nandGate( in1c3, in2c3 );
            } else if ( D3.value == "NOR" ) {
                D3o = gates.norGate( in1c3, in2c3 );
            } else if ( D3.value == "XOR" ) {
                D3o = gates.xorGate( in1c3, in2c3 );
            }
            outputR3 = D3o;
        } else {
            D3o = null;
            outputR3 = B3o; //if gate B3 is selected but D3 is not, output is the prev gate
        }
    } else {
        D3o = null;
        outputR3 = null; //if there is no prev gate (B3), output of the row is null
    }
}
/***********************Row 4***********************/
function row4 () {
    /***************Input logic for B3***********************/
    if ( in1A4.value == "A" ) { //input 1 on A4
        in1a4 = A;
        aCheck.push( 1 );
    } else if ( in1A4.value == "notA" ) {
        in1a4 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A4.value == "B" ) {
        in1a4 = B;
        bCheck.push( 1 );
    } else if ( in1A4.value == "notB" ) {
        in1a4 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A4.value == "C" ) {
        in1a4 = C;
        cCheck.push( 1 );
    } else if ( in1A4.value == "notC" ) {
        in1a4 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A4.value == "D" ) {
        in1a4 = D;
        dCheck.push( 1 );
    } else if ( in1A4.value == "notD" ) {
        in1a4 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1A4.value == "R1o" ) {
        in1a4 = outputR1;
    } else if ( in1A4.value == "notR1o" ) {
        in1a4 = gates.notGate( outputR1 );
    } else if ( in1A4.value == "R2o" ) {
        in1a4 = outputR2;
    } else if ( in1A4.value == "notR2o" ) {
        in1a4 = gates.notGate( outputR2 );
    } else if ( in1A4.value == "R3o" ) {
        in1a4 = outputR3;
    } else if ( in1A4.value == "notR3o" ) {
        in1a4 = gates.notGate( outputR3 );
    }
    if ( in2A4.value == "A" ) { //input 2 on A4
        in2a4 = A;
        aCheck.push( 1 );
    } else if ( in2A4.value == "notA" ) {
        in2a4 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A4.value == "B" ) {
        in2a4 = B;
        bCheck.push( 1 );
    } else if ( in2A4.value == "notB" ) {
        in2a4 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A4.value == "C" ) {
        in2a4 = C;
        cCheck.push( 1 );
    } else if ( in2A4.value == "notC" ) {
        in2a4 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A4.value == "D" ) {
        in2a4 = D;
        dCheck.push( 1 );
    } else if ( in2A4.value == "notD" ) {
        in2a4 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2A4.value == "R1o" ) {
        in2a4 = outputR1;
    } else if ( in2A4.value == "notR1o" ) {
        in2a4 = gates.notGate( outputR1 );
    } else if ( in2A4.value == "R2o" ) {
        in2a4 = outputR2;
    } else if ( in2A4.value == "notR2o" ) {
        in2a4 = gates.notGate( outputR2 );
    } else if ( in2A4.value == "R3o" ) {
        in2a4 = outputR3;
    } else if ( in2A4.value == "notR3o" ) {
        in2a4 = gates.notGate( outputR3 );
    }

    /**log row 4 values
    console.log("B4: " + B4.value);
    console.log("in1a4: " + in1a4 + " in2a4: " + in2a4)**/

    /***************Output logic for B4***********************/
    if ( B4.value != "null" && in1a4 != null && in2a4 != null ) { //output for B4

        if ( B4.value == "AND" ) {
            B4o = gates.andGate( in1a4, in2a4 );
        }
        else if ( B4.value == "OR" ) {
            B4o = gates.orGate( in1a4, in2a4 );
        } else if ( B4.value == "NAND" ) {
            B4o = gates.nandGate( in1a4, in2a4 );
        } else if ( B4.value == "NOR" ) {
            B4o = gates.norGate( in1a4, in2a4 );
        } else if ( B4.value == "XOR" ) {
            B4o = gates.xorGate( in1a4, in2a4 );
        }
    } else {
        B4o = null; //if no gate is not selected and both inputs are not chosen
    }

    //set the output for row 4
    outputR4 = B4o;

    /***************input logic for D4***********************/
    if ( in1C4.value == "A" ) { //input 1 on C4
        in1c4 = A;
        aCheck.push( 1 );
    } else if ( in1C4.value == "notA" ) {
        in1c4 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1C4.value == "B" ) {
        in1c4 = B;
        bCheck.push( 1 );
    } else if ( in1C4.value == "notB" ) {
        in1c4 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C4.value == "C" ) {
        in1c4 = C;
        cCheck.push( 1 );
    } else if ( in1C4.value == "notC" ) {
        in1c4 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C4.value == "D" ) {
        in1c4 = D;
        dCheck.push( 1 );
    } else if ( in1C4.value == "notD" ) {
        in1c4 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C4.value == "R1o" ) {
        in1c4 = outputR1;
    } else if ( in1C4.value == "notR1o" ) {
        in1c4 = gates.notGate( outputR1 );
    } else if ( in1C4.value == "R2o" ) {
        in1c4 = outputR2;
    } else if ( in1C4.value == "notR2o" ) {
        in1c4 = gates.notGate( outputR2 );
    } else if ( in1C4.value == "R3o" ) {
        in1c4 = outputR3;
    } else if ( in1C4.value == "notR3o" ) {
        in1c4 = gates.notGate( outputR3 );
    } else if ( in1C4.value == "R4o" ) {
        in1c4 = B4o;
    } else if ( in1C4.value == "notR4o" ) {
        in1c4 = gates.notGate( B4o );
    }
    if ( in2C4.value == "A" ) { //input 2 on C2
        in2c4 = A;
        aCheck.push( 1 );
    } else if ( in2C4.value == "notA" ) {
        in2c4 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C4.value == "B" ) {
        in2c4 = B;
        bCheck.push( 1 );
    } else if ( in2C4.value == "notB" ) {
        in2c4 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C4.value == "C" ) {
        in2c4 = C;
        cCheck.push( 1 );
    } else if ( in2C4.value == "notC" ) {
        in2c4 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C4.value == "D" ) {
        in2c4 = D;
        dCheck.push( 1 );
    } else if ( in2C4.value == "notD" ) {
        in2c4 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C4.value == "R1o" ) {
        in1c4 = outputR1;
    } else if ( in2C4.value == "notR1o" ) {
        in2c4 = gates.notGate( outputR1 );
    } else if ( in2C4.value == "R2o" ) {
        in1c4 = outputR2;
    } else if ( in2C4.value == "notR2o" ) {
        in2c4 = gates.notGate( outputR2 );
    } else if ( in2C4.value == "R3o" ) {
        in1c4 = outputR3;
    } else if ( in2C4.value == "notR3o" ) {
        in2c4 = gates.notGate( outputR3 );
    } else if ( in2C4.value == "R4o" ) {
        in1c4 = B4o;
    } else if ( in2C4.value == "notR4o" ) {
        in2c4 = gates.notGate( B4o );
    }

    /***************Output logic for D4***********************/
    if ( B4o != null ) { //if prev gate has an output
        if ( D4.value != "null" && in1c4 != null && in2c4 != null ) {
            if ( D4.value == "AND" ) {
                D4o = gates.andGate( in1c4, in2c4 );
            } else if ( D4.value == "OR" ) {
                D4o = gates.orGate( in1c4, in2c4 );
            } else if ( D4.value == "NAND" ) {
                D4o = gates.nandGate( in1c4, in2c4 );
            } else if ( D4.value == "NOR" ) {
                D4o = gates.norGate( in1c4, in2c4 );
            } else if ( D4.value == "XOR" ) {
                D4o = gates.xorGate( in1c4, in2c4 );
            }
            outputR4 = D4o;
        } else {
            D4o = null;
            outputR4 = B4o; //if gate B4 is selected but D4 is not, output is the prev gate
        }
    } else {
        D4o = null;
        outputR4 = null; //if there is no prev gate (B4), output of the row is null
    }
}
/***********************Row 5***********************/
function row5 () {
    /***************Input logic for B3***********************/
    if ( in1A5.value == "A" ) { //input 1 on A5
        in1a5 = A;
        aCheck.push( 1 );
    } else if ( in1A5.value == "notA" ) {
        in1a5 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A5.value == "B" ) {
        in1a5 = B;
        bCheck.push( 1 );
    } else if ( in1A5.value == "notB" ) {
        in1a5 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A5.value == "C" ) {
        in1a5 = C;
        cCheck.push( 1 );
    } else if ( in1A5.value == "notC" ) {
        in1a5 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A5.value == "D" ) {
        in1a5 = D;
        dCheck.push( 1 );
    } else if ( in1A5.value == "notD" ) {
        in1a5 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1A5.value == "R1o" ) {
        in1a5 = outputR1;
    } else if ( in1A5.value == "notR1o" ) {
        in1a5 = gates.notGate( outputR1 );
    } else if ( in1A5.value == "R2o" ) {
        in1a5 = outputR2;
    } else if ( in1A5.value == "notR2o" ) {
        in1a5 = gates.notGate( outputR2 );
    } else if ( in1A5.value == "R3o" ) {
        in1a5 = outputR3;
    } else if ( in1A5.value == "notR3o" ) {
        in1a5 = gates.notGate( outputR3 );
    } else if ( in1A5.value == "R4o" ) {
        in1a5 = outputR4;
    } else if ( in1A5.value == "notR4o" ) {
        in1a5 = gates.notGate( outputR4 );
    }
    if ( in2A5.value == "A" ) { //input 2 on A5
        in2a5 = A;
        aCheck.push( 1 );
    } else if ( in2A5.value == "notA" ) {
        in2a5 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A5.value == "B" ) {
        in2a5 = B;
        bCheck.push( 1 );
    } else if ( in2A5.value == "notB" ) {
        in2a5 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A5.value == "C" ) {
        in2a5 = C;
        cCheck.push( 1 );
    } else if ( in2A5.value == "notC" ) {
        in2a5 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A5.value == "D" ) {
        in2a5 = D;
        dCheck.push( 1 );
    } else if ( in2A5.value == "notD" ) {
        in2a5 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2A5.value == "R1o" ) {
        in2a5 = outputR1;
    } else if ( in2A5.value == "notR1o" ) {
        in2a5 = gates.notGate( outputR1 );
    } else if ( in2A5.value == "R2o" ) {
        in2a5 = outputR2;
    } else if ( in2A5.value == "notR2o" ) {
        in2a5 = gates.notGate( outputR2 );
    } else if ( in2A5.value == "R3o" ) {
        in2a5 = outputR3;
    } else if ( in2A5.value == "notR3o" ) {
        in2a5 = gates.notGate( outputR3 );
    } else if ( in2A5.value == "R4o" ) {
        in2a5 = outputR4;
    } else if ( in2A5.value == "notR4o" ) {
        in2a5 = gates.notGate( outputR4 );
    }

    /**log row 5 values
    console.log("B5: " + B5.value);
    console.log("in1a5: " + in1a5 + " in2a5: " + in2a5)**/

    /***************Output logic for B5***********************/
    if ( B5.value != "null" && in1a5 != null && in2a5 != null ) { //output for B5

        if ( B5.value == "AND" ) {
            B5o = gates.andGate( in1a5, in2a5 );
        }
        else if ( B5.value == "OR" ) {
            B5o = gates.orGate( in1a5, in2a5 );
        } else if ( B5.value == "NAND" ) {
            B5o = gates.nandGate( in1a5, in2a5 );
        } else if ( B5.value == "NOR" ) {
            B5o = gates.norGate( in1a5, in2a5 );
        } else if ( B5.value == "XOR" ) {
            B5o = gates.xorGate( in1a5, in2a5 );
        }
    } else {
        B5o = null; //if no gate is not selected and both inputs are not chosen
    }

    //set the output for row 5
    outputR5 = B5o;

    /***************input logic for D5***********************/
    if ( in1C5.value == "A" ) { //input 1 on C5
        in1c5 = A;
        aCheck.push( 1 );
    } else if ( in1C5.value == "notA" ) {
        in1c5 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1C5.value == "B" ) {
        in1c5 = B;
        bCheck.push( 1 );
    } else if ( in1C5.value == "notB" ) {
        in1c5 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C5.value == "C" ) {
        in1c5 = C;
        cCheck.push( 1 );
    } else if ( in1C5.value == "notC" ) {
        in1c5 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C5.value == "D" ) {
        in1c5 = D;
        dCheck.push( 1 );
    } else if ( in1C5.value == "notD" ) {
        in1c5 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C5.value == "R1o" ) {
        in1c5 = outputR1;
    } else if ( in1C5.value == "notR1o" ) {
        in1c5 = gates.notGate( outputR1 );
    } else if ( in1C5.value == "R2o" ) {
        in1c5 = outputR2;
    } else if ( in1C5.value == "notR2o" ) {
        in1c5 = gates.notGate( outputR2 );
    } else if ( in1C5.value == "R3o" ) {
        in1c5 = outputR3;
    } else if ( in1C5.value == "notR3o" ) {
        in1c5 = gates.notGate( outputR3 );
    } else if ( in1C5.value == "R4o" ) {
        in1c5 = outputR4;
    } else if ( in1C5.value == "notR4o" ) {
        in1c5 = gates.notGate( outputR4 );
    } else if ( in1C5.value == "R5o" ) {
        in1c5 = B5o;
    } else if ( in1C5.value == "notR5o" ) {
        in1c5 = gates.notGate( B5o );
    }
    if ( in2C5.value == "A" ) { //input 2 on C2
        in2c5 = A;
        aCheck.push( 1 );
    } else if ( in2C5.value == "notA" ) {
        in2c5 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C5.value == "B" ) {
        in2c5 = B;
        bCheck.push( 1 );
    } else if ( in2C5.value == "notB" ) {
        in2c5 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C5.value == "C" ) {
        in2c5 = C;
        cCheck.push( 1 );
    } else if ( in2C5.value == "notC" ) {
        in2c5 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C5.value == "D" ) {
        in2c5 = D;
        dCheck.push( 1 );
    } else if ( in2C5.value == "notD" ) {
        in2c5 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C5.value == "R1o" ) {
        in1c5 = outputR1;
    } else if ( in2C5.value == "notR1o" ) {
        in2c5 = gates.notGate( outputR1 );
    } else if ( in2C5.value == "R2o" ) {
        in1c5 = outputR2;
    } else if ( in2C5.value == "notR2o" ) {
        in2c5 = gates.notGate( outputR2 );
    } else if ( in2C5.value == "R3o" ) {
        in1c5 = outputR3;
    } else if ( in2C5.value == "notR3o" ) {
        in2c5 = gates.notGate( outputR3 );
    } else if ( in2C5.value == "R4o" ) {
        in1c5 = outputR4;
    } else if ( in2C5.value == "notR4o" ) {
        in2c5 = gates.notGate( outputR4 );
    } else if ( in2C5.value == "R5o" ) {
        in1c5 = B5o;
    } else if ( in2C5.value == "notR5o" ) {
        in2c5 = gates.notGate( B5o );
    }

    /***************Output logic for D5***********************/
    if ( B5o != null ) { //if prev gate has an output
        if ( D5.value != "null" && in1c5 != null && in2c5 != null ) {
            if ( D5.value == "AND" ) {
                D5o = gates.andGate( in1c5, in2c5 );
            } else if ( D5.value == "OR" ) {
                D5o = gates.orGate( in1c5, in2c5 );
            } else if ( D5.value == "NAND" ) {
                D5o = gates.nandGate( in1c5, in2c5 );
            } else if ( D5.value == "NOR" ) {
                D5o = gates.norGate( in1c5, in2c5 );
            } else if ( D5.value == "XOR" ) {
                D5o = gates.xorGate( in1c5, in2c5 );
            }
            outputR5 = D5o;
        } else {
            D5o = null;
            outputR5 = B5o; //if gate B5 is selected but D5 is not, output is the prev gate
        }
    } else {
        D5o = null;
        outputR5 = null; //if there is no prev gate (B5), output of the row is null
    }
}
/***********************Row 6***********************/
function row6 () {
    /***************Input logic for B6***********************/
    if ( in1A6.value == "A" ) { //input 1 on A6
        in1a6 = A;
        aCheck.push( 1 );
    } else if ( in1A6.value == "notA" ) {
        in1a6 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1A6.value == "B" ) {
        in1a6 = B;
        bCheck.push( 1 );
    } else if ( in1A6.value == "notB" ) {
        in1a6 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1A6.value == "C" ) {
        in1a6 = C;
        cCheck.push( 1 );
    } else if ( in1A6.value == "notC" ) {
        in1a6 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1A6.value == "D" ) {
        in1a6 = D;
        dCheck.push( 1 );
    } else if ( in1A6.value == "notD" ) {
        in1a6 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1A6.value == "R1o" ) {
        in1a6 = outputR1;
    } else if ( in1A6.value == "notR1o" ) {
        in1a6 = gates.notGate( outputR1 );
    } else if ( in1A6.value == "R2o" ) {
        in1a6 = outputR2;
    } else if ( in1A6.value == "notR2o" ) {
        in1a6 = gates.notGate( outputR2 );
    } else if ( in1A6.value == "R3o" ) {
        in1a6 = outputR3;
    } else if ( in1A6.value == "notR3o" ) {
        in1a6 = gates.notGate( outputR3 );
    } else if ( in1A6.value == "R4o" ) {
        in1a6 = outputR4;
    } else if ( in1A6.value == "notR4o" ) {
        in1a6 = gates.notGate( outputR4 );
    } else if ( in1A6.value == "R5o" ) {
        in1a6 = outputR5;
    } else if ( in1A6.value == "notR5o" ) {
        in1a6 = gates.notGate( outputR5 );
    }
    if ( in2A6.value == "A" ) { //input 2 on A6
        in2a6 = A;
        aCheck.push( 1 );
    } else if ( in2A6.value == "notA" ) {
        in2a6 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2A6.value == "B" ) {
        in2a6 = B;
        bCheck.push( 1 );
    } else if ( in2A6.value == "notB" ) {
        in2a6 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2A6.value == "C" ) {
        in2a6 = C;
        cCheck.push( 1 );
    } else if ( in2A6.value == "notC" ) {
        in2a6 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2A6.value == "D" ) {
        in2a6 = D;
        dCheck.push( 1 );
    } else if ( in2A6.value == "notD" ) {
        in2a6 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2A6.value == "R1o" ) {
        in2a6 = outputR1;
    } else if ( in2A6.value == "notR1o" ) {
        in2a6 = gates.notGate( outputR1 );
    } else if ( in2A6.value == "R2o" ) {
        in2a6 = outputR2;
    } else if ( in2A6.value == "notR2o" ) {
        in2a6 = gates.notGate( outputR2 );
    } else if ( in2A6.value == "R3o" ) {
        in2a6 = outputR3;
    } else if ( in2A6.value == "notR3o" ) {
        in2a6 = gates.notGate( outputR3 );
    } else if ( in2A6.value == "R4o" ) {
        in2a6 = outputR4;
    } else if ( in2A6.value == "notR4o" ) {
        in2a6 = gates.notGate( outputR4 );
    } else if ( in2A6.value == "R5o" ) {
        in2a6 = outputR5;
    } else if ( in2A6.value == "notR5o" ) {
        in2a6 = gates.notGate( outputR5 );
    }

    /**log row 6 values
    console.log("B6: " + B6.value);
    console.log("in1a6: " + in1a6 + " in2a6: " + in2a6)**/

    /***************Output logic for B6***********************/
    if ( B6.value != "null" && in1a6 != null && in2a6 != null ) { //output for B6

        if ( B6.value == "AND" ) {
            B6o = gates.andGate( in1a6, in2a6 );
        }
        else if ( B6.value == "OR" ) {
            B6o = gates.orGate( in1a6, in2a6 );
        } else if ( B6.value == "NAND" ) {
            B6o = gates.nandGate( in1a6, in2a6 );
        } else if ( B6.value == "NOR" ) {
            B6o = gates.norGate( in1a6, in2a6 );
        } else if ( B6.value == "XOR" ) {
            B6o = gates.xorGate( in1a6, in2a6 );
        }
    } else {
        B6o = null; //if no gate is not selected and both inputs are not chosen
    }

    //set the output for row 4
    outputR6 = B6o;

    /***************input logic for D6***********************/
    if ( in1C6.value == "A" ) { //input 1 on C6
        in1c6 = A;
        aCheck.push( 1 );
    } else if ( in1C6.value == "notA" ) {
        in1c6 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in1C6.value == "B" ) {
        in1c6 = B;
        bCheck.push( 1 );
    } else if ( in1C6.value == "notB" ) {
        in1c6 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in1C6.value == "C" ) {
        in1c6 = C;
        cCheck.push( 1 );
    } else if ( in1C6.value == "notC" ) {
        in1c6 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in1C6.value == "D" ) {
        in1c6 = D;
        dCheck.push( 1 );
    } else if ( in1C6.value == "notD" ) {
        in1c6 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in1C6.value == "R1o" ) {
        in1c6 = outputR1;
    } else if ( in1C6.value == "notR1o" ) {
        in1c6 = gates.notGate( outputR1 );
    } else if ( in1C6.value == "R2o" ) {
        in1c6 = outputR2;
    } else if ( in1C6.value == "notR2o" ) {
        in1c6 = gates.notGate( outputR2 );
    } else if ( in1C6.value == "R3o" ) {
        in1c6 = outputR3;
    } else if ( in1C6.value == "notR3o" ) {
        in1c6 = gates.notGate( outputR3 );
    } else if ( in1C6.value == "R4o" ) {
        in1c6 = outputR4;
    } else if ( in1C6.value == "notR4o" ) {
        in1c6 = gates.notGate( outputR4 );
    } else if ( in1C6.value == "R5o" ) {
        in1c6 = outputR5;
    } else if ( in1C6.value == "notR5o" ) {
        in1c6 = gates.notGate( outputR5 );
    } else if ( in1C6.value == "R6o" ) {
        in1c6 = B6o;
    } else if ( in1C6.value == "notR6o" ) {
        in1c6 = gates.notGate( B6o );
    }
    if ( in2C6.value == "A" ) { //input 2 on C2
        in2c6 = A;
        aCheck.push( 1 );
    } else if ( in2C6.value == "notA" ) {
        in2c6 = gates.notGate( A );
        aCheck.push( 1 );
    } else if ( in2C6.value == "B" ) {
        in2c6 = B;
        bCheck.push( 1 );
    } else if ( in2C6.value == "notB" ) {
        in2c6 = gates.notGate( B );
        bCheck.push( 1 );
    } else if ( in2C6.value == "C" ) {
        in2c6 = C;
        cCheck.push( 1 );
    } else if ( in2C6.value == "notC" ) {
        in2c6 = gates.notGate( C );
        cCheck.push( 1 );
    } else if ( in2C6.value == "D" ) {
        in2c6 = D;
        dCheck.push( 1 );
    } else if ( in2C6.value == "notD" ) {
        in2c6 = gates.notGate( D );
        dCheck.push( 1 );
    } else if ( in2C6.value == "R1o" ) {
        in1c6 = outputR1;
    } else if ( in2C6.value == "notR1o" ) {
        in2c6 = gates.notGate( outputR1 );
    } else if ( in2C6.value == "R2o" ) {
        in1c6 = B2o;
    } else if ( in2C6.value == "notR2o" ) {
        in2c6 = gates.notGate( B2o );
    } else if ( in2C6.value == "R3o" ) {
        in1c6 = outputR3;
    } else if ( in2C6.value == "notR3o" ) {
        in2c6 = gates.notGate( outputR3 );
    } else if ( in2C6.value == "R4o" ) {
        in1c6 = outputR4;
    } else if ( in2C6.value == "notR4o" ) {
        in2c6 = gates.notGate( outputR4 );
    } else if ( in2C6.value == "R5o" ) {
        in1c6 = outputR5;
    } else if ( in2C6.value == "notR5o" ) {
        in2c6 = gates.notGate( outputR5 );
    } else if ( in2C6.value == "R6o" ) {
        in1c6 = B6o;
    } else if ( in2C6.value == "notR6o" ) {
        in2c6 = gates.notGate( B6o );
    }

    /***************Output logic for D6***********************/
    if ( B6o != null ) { //if prev gate has an output
        if ( D6.value != "null" && in1c6 != null && in2c6 != null ) {
            if ( D6.value == "AND" ) {
                D6o = gates.andGate( in1c6, in2c6 );
            } else if ( D6.value == "OR" ) {
                D6o = gates.orGate( in1c6, in2c6 );
            } else if ( D6.value == "NAND" ) {
                D6o = gates.nandGate( in1c6, in2c6 );
            } else if ( D6.value == "NOR" ) {
                D6o = gates.norGate( in1c6, in2c6 );
            } else if ( D6.value == "XOR" ) {
                D6o = gates.xorGate( in1c6, in2c6 );
            }
            outputR6 = D6o;
        } else {
            D6o = null;
            outputR6 = B6o; //if gate B6 is selected but D6 is not, output is the prev gate
        }
    } else {
        D6o = null;
        outputR6 = null; //if there is no prev gate (B6), output of the row is null
    }
}

/***********************Auto generate***********************/
const autogen = document.querySelector( "#autogen" );
autogen.onclick = function autoGen () {
    truthTable();
};

/***********************Reset Truth Table***********************/
export function resetTable () {
    //clear checking arrays
    aCheck = []; bCheck = []; cCheck = []; dCheck = [];

    //also clear the output array
    B1o = null; B2o = null; B3o = null; B4o = null; B5o = null; B6o = null;
    D1o = null; D2o = null; D3o = null; D4o = null; D5o = null; D6o = null;
    outputR1 = null; outputR2 = null; outputR3 = null;
    outputR4 = null; outputR5 = null; outputR6 = null;
    output = null; genOut = [];

    //CLEAR ROW ARRAYS
    R1arr = []; R2arr = []; R3arr = []; R4arr = []; R5arr = []; R6arr = [];

    //reset Table structure
    htmlContent = '';
    tbody.innerHTML = `
    <tr class="title_row">
          <td class="tt_data colA">
            <p>A</p>
          </td>
          <td class="tt_data colB">
            <p>B</p>
          </td>
          <td class="tt_data colC">
            <p>C</p>
          </td>
          <td class="tt_data colD">
            <p>D</p>
          </td>
          <td  class="tt_data colE">
            <p>output</p>
          </td>
        </tr>`;

    //reset boalean expression variables
    SOP_StringArray = [];
    SOP_BinArray = [];
    POS_StringArray = [];
    POS_BinArray = [];
}

/***********************Generate Truth-Table***********************/
export function truthTable () {
    console.clear();
    //reset table gefore generating new one
    resetTable();

    //check for the number of inputs selected, and set the correct number of bits
    if ( no_inputs.value == 2 ) { //4bits
        genInA = [ 0, 0, 1, 1 ];
        genInB = [ 0, 1, 0, 1 ];
        genInC = [ "", "", "", "" ];
        genInD = [ "", "", "", "" ];
    } else if ( no_inputs.value == 3 ) { //8 bits
        genInA = [ 0, 0, 0, 0, 1, 1, 1, 1 ];
        genInB = [ 0, 0, 1, 1, 0, 0, 1, 1 ];
        genInC = [ 0, 1, 0, 1, 0, 1, 0, 1 ];
        genInD = [ "", "", "", "", "", "", "", "" ];
    } else if ( no_inputs.value == 4 ) { //16 bit
        genInA = [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1 ];
        genInB = [ 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1 ];
        genInC = [ 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1 ];
        genInD = [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ];
    }

    // clear bin expresion arrays
    SOP_StringArray = [];
    SOP_BinArray = [];
    POS_StringArray = [];
    POS_BinArray = [];

    //generate the output array [main output generator logic]
    for ( let i = 0; i < genInA.length; i++ ) {
        A = genInA[ i ];
        B = genInB[ i ];
        C = genInC[ i ];
        D = genInD[ i ];

        //call the Logic Combination table rows
        row1();
        row2();
        row3();
        row4();
        row5();
        row6();

        //set final output
        finalOutDecider();

        //push all outputs to the main output array
        genOut.push( output );

        //set row output arrays
        R1arr.push( outputR1 );
        R2arr.push( outputR2 );
        R3arr.push( outputR3 );
        R4arr.push( outputR4 );
        R5arr.push( outputR5 );
        R6arr.push( outputR6 );

        //use SOP to write an Expression in As and Bs
        if ( output == 1 ) { //sop take only high outputs
            //check if genOut has a prev input
            if ( SOP_StringArray[ i - 1 ] != null ) {
                SOP_StringArray.push( " + " );
            }

            //if no of inputs is 2, do for A and B only
            if ( no_inputs.value >= 2 ) {
                if ( A == 1 ) {
                    SOP_StringArray.push( "A" );
                } else if ( A == 0 ) {
                    SOP_StringArray.push( "A'" );
                }
                if ( B == 1 ) {
                    SOP_StringArray.push( "B" );
                } else if ( B == 0 ) {
                    SOP_StringArray.push( "B'" );
                }
            }

            //if no of inputs is 3, do for A, B and C only
            if ( no_inputs.value >= 3 ) {
                if ( C == 1 ) {
                    SOP_StringArray.push( "C" );
                } else if ( C == 0 ) {
                    SOP_StringArray.push( "C'" );
                }
            }

            //if no of inputs is 4, do for A, B, C and D
            if ( no_inputs.value >= 4 ) {
                if ( D == 1 ) {
                    SOP_StringArray.push( "D" );
                } else if ( D == 0 ) {
                    SOP_StringArray.push( "D'" );
                }
            }
        }
        //use SOP to write an expression in 1s and 0s
        if ( output == 1 ) { //sop take only high outputs
            if ( SOP_BinArray.includes( 1 ) || SOP_BinArray.includes( 0 ) ) {
                SOP_BinArray.push( " + " );
            }

            if ( A === 1 || A === 0 ) {
                SOP_BinArray.push( A );
            }
            if ( B === 1 || B === 0 ) {
                SOP_BinArray.push( B );
            }
            if ( C === 1 || C === 0 ) {
                SOP_BinArray.push( C );
            }
            if ( D === 1 || D === 0 ) {
                SOP_BinArray.push( D );
            }
        }

        //use POS to write an expression in As and Bs
        if ( output == 0 ) {
            //add a bracket before
            POS_StringArray.push( "(" );

            //if no of inputs is 2, do for A and B only
            if ( no_inputs.value >= 2 ) {
                if ( A == 1 ) {
                    POS_StringArray.push( "A'" );
                } else if ( A == 0 ) {
                    POS_StringArray.push( "A" );
                }
                if ( B == 1 ) {
                    POS_StringArray.push( "+B'" );
                } else if ( B == 0 ) {
                    POS_StringArray.push( "+B" );
                }
            }

            //if no of inputs is 3, do for A, B and C only
            if ( no_inputs.value >= 3 ) {
                if ( C == 1 ) {
                    POS_StringArray.push( "+C'" );
                } else if ( C == 0 ) {
                    POS_StringArray.push( "+C" );
                }
            }

            //if no of inputs is 4, do for A, B, C and D
            if ( no_inputs.value >= 4 ) {
                if ( D == 1 ) {
                    POS_StringArray.push( "+D'" );
                } else if ( D == 0 ) {
                    POS_StringArray.push( "+D" );
                }
            }
            //add a bracket after
            POS_StringArray.push( ") " );
        }

        //use POS to write an expression in 1s and 0s
        if ( output == 0 ) {
            POS_BinArray.push( "(" );

            if ( A === 1 || A === 0 ) {
                POS_BinArray.push( A );
            }
            if ( B === 1 || B === 0 ) {
                POS_BinArray.push( "+" + B );
            }
            if ( C === 1 || C === 0 ) {
                POS_BinArray.push( "+" + C );
            }
            if ( D === 1 || D === 0 ) {
                POS_BinArray.push( "+" + D );
            }

            POS_BinArray.push( ") " );
        }
    }

    //set the html content
    SOP_String.innerText = SOP_StringArray.join( "" );
    SOP_Bin.innerText = SOP_BinArray.join( "" );
    POS_String.innerText = POS_StringArray.join( "" );
    POS_Bin.innerText = POS_BinArray.join( "" );

    //set row button outputs
    if ( !R1arr.includes( null ) ) {
        row1btn.style.backgroundColor = "green";
    } else {
        row1btn.style.backgroundColor = "red";
    }
    if ( !R2arr.includes( null ) ) {
        row2btn.style.backgroundColor = "green";
    } else {
        row2btn.style.backgroundColor = "red";
    }
    if ( !R3arr.includes( null ) ) {
        row3btn.style.backgroundColor = "green";
    } else {
        row3btn.style.backgroundColor = "red";
    }
    if ( !R4arr.includes( null ) ) {
        row4btn.style.backgroundColor = "green";
    } else {
        row4btn.style.backgroundColor = "red";
    }
    if ( !R5arr.includes( null ) ) {
        row5btn.style.backgroundColor = "green";
    } else {
        row5btn.style.backgroundColor = "red";
    }
    if ( !R6arr.includes( null ) ) {
        row6btn.style.backgroundColor = "green";
    } else {
        row6btn.style.backgroundColor = "red";
    }

    //check which inputs are used
    inputChecker();

    //append truth table values to html pages
    domOperation();
    tbody.innerHTML += htmlContent; //add the html content to the body of the table

    //call timing diagram funciton on canvas.js
    canvas.drawCanvas( genInA, genInB, genInC, genInD, genOut );
}

/*******final output decider*******/
function finalOutDecider () {
    /********************set main output (using the last row with an output)**********************/

    if ( outputR6 == null ) { //if row 6 has no output, then check row 5

        if ( outputR5 == null ) { //if row 5 has no output, then check row 4

            if ( outputR4 == null ) { //if row 4 has no output, then check row 3

                if ( outputR3 == null ) { //if row 3 has no output, then check row 2

                    if ( outputR2 == null ) { //if row 2 has no output, then check row 1

                        if ( outputR1 == null ) {//if row 1 has not output, set the output to null
                            output = null;
                        } else { //end if row 1
                            output = outputR1;
                        }
                    } else { //end if row 2
                        output = outputR2;
                    }
                } else { //end if row 3
                    output = outputR3;
                }
            } else { //end if row 4
                output = outputR4;
            }
        } else { //end if row 5
            output = outputR5;
        }
    } else { //end if row 6
        output = outputR6;
    }
}

/******input checker function*****/
function inputChecker () {
    //declare column class variables
    const colA = document.querySelector( ".colA" );
    const colB = document.querySelector( ".colB" );
    const colC = document.querySelector( ".colC" );
    const colD = document.querySelector( ".colD" );

    /**********check if which of the inputs are chosen*********/

    //diplay red for the column that is not picked
    if ( aCheck.includes( 1 ) ) {
        console.log( "A is Chosen" );
        colA.style.backgroundColor = "transparent";
    } else {
        console.log( "A is not chosen" );
        colA.style.backgroundColor = "red";
        if ( no_inputs.value == 4 ) {
            genInA = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 3 ) {
            genInA = [ "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 2 ) {
            genInA = [ "", "", "", "" ];
        }
    }
    if ( bCheck.includes( 1 ) ) {
        console.log( "B is Chosen" );
        colB.style.backgroundColor = "transparent";
    } else {
        console.log( "B is not chosen" );
        colB.style.backgroundColor = "red";
        if ( no_inputs.value == 4 ) {
            genInB = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 3 ) {
            genInB = [ "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 2 ) {
            genInB = [ "", "", "", "" ];
        }
    }
    if ( cCheck.includes( 1 ) ) {
        console.log( "C is Chosen" );
        colC.style.backgroundColor = "transparent";
    } else {
        console.log( "C is not chosen" );
        colC.style.backgroundColor = "red";
        if ( no_inputs.value == 4 ) {
            genInC = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 3 ) {
            genInC = [ "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 2 ) {
            genInC = [ "", "", "", "" ];
        }
    }
    if ( dCheck.includes( 1 ) ) {
        console.log( "D is Chosen" );
        colD.style.backgroundColor = "transparent";
    } else {
        console.log( "D is not chosen" );
        colD.style.backgroundColor = "red";
        if ( no_inputs.value == 4 ) {
            genInD = [ "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 3 ) {
            genInD = [ "", "", "", "", "", "", "", "" ];
        } else if ( no_inputs.value == 2 ) {
            genInD = [ "", "", "", "" ];
        }
    }
    //check if output is not null
    if ( output == null ) {
        genOut = null;
    } else {
        genOut = genOut;
    }
}

/*******DOM Operations************/
function domOperation () {
    for ( let i = 0; i < genOut.length; i++ ) {
        htmlContent += `
        <tr class="tt_row" id="row${ i + 1 }">
          <td class="tt_data colA">
            ${ genInA[ i ] }
          </td>
          <td class="tt_data colB">
          ${ genInB[ i ] }
          </td>
          <td class="tt_data colC">
          ${ genInC[ i ] }
          </td>
          <td class="tt_data colD">
          ${ genInD[ i ] }
          </td>
          <td class="tt_data colE">
          ${ genOut[ i ] }
          </td>
        </tr>
        `;
    }
}