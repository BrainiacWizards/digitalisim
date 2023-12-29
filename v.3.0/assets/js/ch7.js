// get current html page form url
const url = window.location.href;
//get html page name
const page = url.split( '/' ).pop();

//check if user is logged in
if ( !sessionStorage.getItem( 'loggedIn' ) ) {
  //redirect to main page
  window.location.href = `./login.html?rdf=${ page }`;
}

//row ID's
const option = document.querySelector( '#logic_options' );
const AH_SR = document.querySelector( '#active-high-sr' );
const AL_SR = document.querySelector( '#active-low-sr' );
const GD_L = document.querySelector( '#gated-d-latch' );
const D_FF = document.querySelector( '#d-flip-flop' );
const JK_FF = document.querySelector( '#jk_flip_flop' );
const DECODERS = document.querySelector( '#decoders' );

//Active high SR latch variables
const sbtn = document.querySelector( "#s" );
const rbtn = document.querySelector( "#r" );
const qbtn = document.querySelector( "#q" );
const nqbtn = document.querySelector( "#qNOT" );
var s = 0, sc = 1;
var r = 0, rc = 1;
var q = 0;
var notq = 0;

//Active low SR latch 
const lsbtn = document.querySelector( "#ls" );
const lrbtn = document.querySelector( "#lr" );
const lqbtn = document.querySelector( "#lq" );
const lnqbtn = document.querySelector( "#lqNOT" );
var ls = 0, lsc = 1;
var lr = 0, lrc = 1;
var lq = 0;
var lnotq = 0;

//Gated D latch variables
const dsbtn = document.querySelector( "#ds" );
const drbtn = document.querySelector( "#dr" );
const enLatchbtn = document.querySelector( "#den" );
const dqbtn = document.querySelector( "#dq" );
const dnqbtn = document.querySelector( "#dqNOT" );
var ds = 0, dsc = 1;
var dr = 0, drc = 1;
var den = 0, denC = 1;
var dq = 0;
var dnotq = 0;

//clock varuiables
var clk = 0, clkC = 1;
let timer = 0;

//D Flip-flop variables
const dFFsbtn = document.querySelector( "#dFFs" );
const dFFrbtn = document.querySelector( "#dFFr" );
const clkFFbtn = document.querySelector( "#dFFen" );
const dFFqbtn = document.querySelector( "#dFFq" );
const dFFnqbtn = document.querySelector( "#dFFqNOT" );
const startDFFbtn = document.querySelector( "#startDFF" );
var dFFs = 0, dFFsc = 1;
var dFFr = 0, dFFrc = 1;
var dFFen = 0, dFFenC = 1;
var dFFq = 0;
var dFFnotq = 0;
var startDFF = -1;
var Dedge;

//JK Flip-flop variables
const JKFFjbtn = document.querySelector( "#JKFFj" );
const JKFFkbtn = document.querySelector( "#JKFFk" );
const JKFFclkbtn = document.querySelector( "#JKFFclk" );
const JKFFqbtn = document.querySelector( "#JKFFq" );
const JKFFnqbtn = document.querySelector( "#JKFFnotq" );
const startJKFFbtn = document.querySelector( "#startJKFF" );
var JKFFj = 0, JKFFjc = 1;
var JKFFk = 0, JKFFkc = 1;
var JKFFclk = 0;
var JKFFq = 0;
var JKFFnotq = 0;
var startJKFF = -1;
var edge;

// BCD Decoder Variables
const BCDdecoderType = document.querySelector( "#type-of-bcd-dec" );
const BCDdecoder = document.querySelector( "#bcd-decoder" );
const BCDinputs = document.querySelectorAll( ".bcd-dec-inputs" );
const BCDoutputs = document.querySelectorAll( ".bcd-dec-outputs" );

/*************************Main logic Function***************************/
logic();
function logic () {

  //display apropriate logic circuit
  if ( option.value == 'default' ) {
    AH_SR.style.display = "none";
    AL_SR.style.display = "none";
    GD_L.style.display = "none";
    D_FF.style.display = "none";
    JK_FF.style.display = "none";
  } else if ( option.value == 'ah-sr' ) {
    AH_SR.style.display = "table";
    AL_SR.style.display = "none";
    GD_L.style.display = "none";
    D_FF.style.display = "none";
    JK_FF.style.display = "none";
  } else if ( option.value == 'al-sr' ) {
    AH_SR.style.display = "none";
    AL_SR.style.display = "table";
    GD_L.style.display = "none";
    D_FF.style.display = "none";
    JK_FF.style.display = "none";
  } else if ( option.value == 'd-latch' ) {
    AH_SR.style.display = "none";
    AL_SR.style.display = "none";
    GD_L.style.display = "table";
    D_FF.style.display = "none";
    JK_FF.style.display = "none";
  } else if ( option.value == 'd-ff' ) {
    AH_SR.style.display = "none";
    AL_SR.style.display = "none";
    GD_L.style.display = "none";
    D_FF.style.display = "table";
    JK_FF.style.display = "none";
  } else if ( option.value == 'jk-ff' ) {
    AH_SR.style.display = "none";
    AL_SR.style.display = "none";
    GD_L.style.display = "none";
    D_FF.style.display = "none";
    JK_FF.style.display = "table";
  }


  activeHighSR();
  activeLowSR();
  gatedDLatch();
  dFlipFlop();
  jkFlipFlop();

  //recall the function
  window.requestAnimationFrame( logic );
}

/************function for a clock***********/
//triggering edge direction
const edgebtn = document.querySelector( "#edge" );

function clock () {

  //assign prev clock value to the temp variable
  var temp = clk;

  //change clock per second
  if ( timer % 60 == 0 ) {
    clkC *= -1;

    if ( clkC === 1 ) {
      clk = 0;
    } else if ( clkC === -1 ) {
      clk = 1;
    }
  }

  //compare current clock with prev clock (temp)
  if ( edgebtn.value == "up" ) {
    if ( clk != temp && temp == 0 ) {
      edge = 1;
    } else if ( clk === temp ) {
      edge = 0;
    }
  } else if ( edgebtn.value == "down" ) {
    if ( clk != temp && temp == 1 ) {
      edge = 1;
    } else if ( clk === temp ) {
      edge = 0;
    }
  }

  //if clock and temp are not the same then that is an edge
  //temp will change with less than a second which is good

  timer++;
  return clk;
}

/************Active High SR latch***********/
function activeHighSR () {
  //click to change input values
  sbtn.onclick = function () {
    sc *= -1;
    console.log( "s is clicked " + s );
    if ( sc === 1 ) {
      s = 0;
      sbtn.innerHTML = s;
    } else if ( sc === -1 ) {
      s = 1;
      sbtn.innerHTML = s;
    }
  };

  rbtn.onclick = function () {
    rc *= -1;
    console.log( "r is clicked " + r );
    if ( rc === 1 ) {
      r = 0;
      rbtn.innerHTML = r;
    } else if ( rc === -1 ) {
      r = 1;
      rbtn.innerHTML = r;
    }
  };

  //input-output sr logic logic
  if ( s === 0 && r === 0 ) {
    q = q;
  } else if ( s === 1 && r === 1 ) {
    q = "invalid";
    notq = "invalid";
  } else if ( s === 0 && r === 1 ) {
    q = 0;
  } else if ( s === 1 && r === 0 ) {
    q = 1;
  }

  //logic for not Q
  if ( q === 0 ) {
    notq = 1;
  } else if ( q === 1 ) {
    notq = 0;
  }

  //display output values
  qbtn.innerHTML = q;
  nqbtn.innerHTML = notq;
}

/************Active low SR latch***********/
function activeLowSR () {

  //click to change input values
  lsbtn.onclick = function () {
    lsc *= -1;
    console.log( "s is clicked " + s );
    if ( lsc === 1 ) {
      ls = 0;
    } else if ( lsc === -1 ) {
      ls = 1;
    }
  };

  lrbtn.onclick = function () {
    lrc *= -1;
    console.log( "r is clicked " + lr );
    if ( lrc === 1 ) {
      lr = 0;
    } else if ( lrc === -1 ) {
      lr = 1;

    }
  };

  //input-output sr logic logic
  if ( ls === 0 && lr === 0 ) {
    lq = "invalid";
    lnotq = "invalid";
  } else if ( ls === 1 && lr === 1 ) {
    lq = lq;
  } else if ( ls === 0 && lr === 1 ) {
    lq = 1;
  } else if ( ls === 1 && lr === 0 ) {
    lq = 0;
  }

  //logic for not Q
  if ( lq === 0 ) {
    lnotq = 1;
  } else if ( lq === 1 ) {
    lnotq = 0;
  }

  //display input values
  lsbtn.innerHTML = ls;
  lrbtn.innerHTML = lr;

  //display output values
  lqbtn.innerHTML = lq;
  lnqbtn.innerHTML = lnotq;
}

/************Gated D latch***********/
function gatedDLatch () {
  //click to change input values
  dsbtn.onclick = function () {
    dsc *= -1;
    if ( dsc === 1 ) {
      ds = 0;
      sbtn.innerHTML = ds;
    } else if ( dsc === -1 ) {
      ds = 1;
      dsbtn.innerHTML = ds;
    }
  };
  if ( ds === 0 ) {
    dr = 1;
  } else if ( ds === 1 ) {
    dr = 0;
  }
  enLatchbtn.onclick = function () {
    denC *= -1;
    if ( denC === 1 ) {
      den = 0;
    } else if ( denC === -1 ) {
      den = 1;
    }
  };

  //input-output D latch logic
  if ( ds === 0 && dr === 1 && den == 1 ) {
    dq = 0;
  } else if ( ds === 1 && dr === 0 && den == 1 ) {
    dq = 1;
  }

  //logic for not Q
  if ( dq === 0 ) {
    dnotq = 1;
  } else if ( dq === 1 ) {
    dnotq = 0;
  }

  //Display input values
  dsbtn.innerHTML = ds;
  enLatchbtn.innerHTML = den;

  //display output values
  dqbtn.innerHTML = dq;
  dnqbtn.innerHTML = dnotq;
}

/************D Flip-FLop***********/
startDFFbtn.onclick = function () {
  startDFF *= -1;
  if ( startDFF === 1 ) {
    startDFFbtn.style.background = "green";
  }
  else if ( startDFF === -1 ) {
    startDFFbtn.style.background = "red";
  }
};

function dFlipFlop () {
  if ( startDFF === 1 ) {

    //click to change input values
    dFFsbtn.onclick = function () {
      dFFsc *= -1;
      if ( dFFsc === 1 ) {
        dFFs = 0;
        dFFsbtn.innerHTML = dFFs;
      } else if ( dFFsc === -1 ) {
        dFFs = 1;
        dFFsbtn.innerHTML = dFFs;
      }
    };
    //invert D input
    if ( dFFs === 0 ) {
      dFFr = 1;
    } else if ( dFFs === 1 ) {
      dFFr = 0;
    }
    dFFen = clock();
  }

  //input-output D flip-flop logic
  if ( dFFs === 0 && dFFr === 1 && edge == 1 ) {
    dFFq = 0;
  } else if ( dFFs === 1 && dFFr === 0 && edge == 1 ) {
    dFFq = 1;
  }

  //logic for not Q
  if ( dFFq === 0 ) {
    dFFnotq = 1;
  } else if ( dFFq === 1 ) {
    dFFnotq = 0;
  }

  //Display input values
  dFFsbtn.innerHTML = dFFs;
  clkFFbtn.innerHTML = dFFen;

  //display output values
  dFFqbtn.innerHTML = dFFq;
  dFFnqbtn.innerHTML = dFFnotq;
}

/************JK Flip-FLop***********/
startJKFFbtn.onclick = function () {
  startJKFF *= -1;
  if ( startJKFF === 1 ) {
    startJKFFbtn.style.background = "green";
  }
  else if ( startJKFF === -1 ) {
    startJKFFbtn.style.background = "red";
  }
};
function jkFlipFlop () {
  if ( startJKFF === 1 ) {

    //click to change input values
    JKFFjbtn.onclick = function () {
      JKFFjc *= -1;

      if ( JKFFjc === 1 ) {
        JKFFj = 0;
      } else if ( JKFFjc === -1 ) {
        JKFFj = 1;
      }
    };
    JKFFkbtn.onclick = function () {
      JKFFkc *= -1;

      if ( JKFFkc === 1 ) {
        JKFFk = 0;
      } else if ( JKFFkc === -1 ) {
        JKFFk = 1;
      }
    };

    JKFFclk = clock();
  }

  //input-output JK flip-flop logic
  if ( JKFFj === 0 && JKFFk === 0 && edge == 1 ) {
    JKFFq = JKFFq; //state of no-change
  } else if ( JKFFj === 0 && JKFFk === 1 && edge == 1 ) {
    JKFFq = 0;
  } else if ( JKFFj === 1 && JKFFk === 0 && edge == 1 ) {
    JKFFq = 1;
  } else if ( JKFFj === 1 && JKFFk === 1 && edge == 1 ) {
    JKFFq = JKFFnotq; //outputs toggle
  }

  //logic for not Q
  if ( JKFFq === 0 ) {
    JKFFnotq = 1;
  } else if ( JKFFq === 1 ) {
    JKFFnotq = 0;
  }

  //Display input values
  JKFFkbtn.innerHTML = JKFFk;
  JKFFjbtn.innerHTML = JKFFj;
  JKFFclkbtn.innerHTML = JKFFclk;

  //display output values
  JKFFqbtn.innerHTML = JKFFq;
  JKFFnqbtn.innerHTML = JKFFnotq;
}

/************BCD-Decoder***********/

// check BCD decoder type
bcdType();

function bcdType () {
  // check clicked bcd input button
  BCDinputs.forEach( BCDinput => {

    BCDinput.onclick = function () {
      // get button innertext
      let inputValue = BCDinput.innerHTML;

      if ( inputValue == 0 ) {
        BCDinput.innerHTML = 1;
      } else {
        BCDinput.innerHTML = 0;
      }

      bcd410Logic();
    };

  } );

  window.requestAnimationFrame( bcdType );
}

// BCD 4-10 decoder logic
function bcd410Logic () {
  // get input values
  let a = BCDinputs[ 0 ].innerHTML;
  let b = BCDinputs[ 1 ].innerHTML;
  let c = BCDinputs[ 2 ].innerHTML;
  let d = BCDinputs[ 3 ].innerHTML;

  // logic
  let x0 = 0, x1 = 0, x2 = 0, x3 = 0, x4 = 0, x5 = 0, x6 = 0, x7 = 0, x8 = 0, x9 = 0;

  if ( a == 0 && b == 0 && c == 0 && d == 0 ) {
    x0 = 1;
  } else if ( a == 1 && b == 0 && c == 0 && d == 0 ) {
    x1 = 1;
  } else if ( a == 0 && b == 1 && c == 0 && d == 0 ) {
    x2 = 1;
  } else if ( a == 1 && b == 1 && c == 0 && d == 0 ) {
    x3 = 1;
  } else if ( a == 0 && b == 0 && c == 1 && d == 0 ) {
    x4 = 1;
  } else if ( a == 1 && b == 0 && c == 1 && d == 0 ) {
    x5 = 1;
  } else if ( a == 0 && b == 1 && c == 1 && d == 0 ) {
    x6 = 1;
  } else if ( a == 1 && b == 1 && c == 1 && d == 0 ) {
    x7 = 1;
  } else if ( a == 0 && b == 0 && c == 0 && d == 1 ) {
    x8 = 1;
  } else if ( a == 1 && b == 0 && c == 0 && d == 1 ) {
    x9 = 1;
  } else {
    x0 = 0;
    x1 = 0;
    x2 = 0;
    x3 = 0;
    x4 = 0;
    x5 = 0;
    x6 = 0;
    x7 = 0;
    x8 = 0;
    x9 = 0;
  }


  // display output values
  BCDoutputs[ 0 ].innerHTML = x0;
  BCDoutputs[ 1 ].innerHTML = x1;
  BCDoutputs[ 2 ].innerHTML = x2;
  BCDoutputs[ 3 ].innerHTML = x3;
  BCDoutputs[ 4 ].innerHTML = x4;
  BCDoutputs[ 5 ].innerHTML = x5;
  BCDoutputs[ 6 ].innerHTML = x6;
  BCDoutputs[ 7 ].innerHTML = x7;
  BCDoutputs[ 8 ].innerHTML = x8;
  BCDoutputs[ 9 ].innerHTML = x9;

  // set color of only the active output
  BCDoutputs.forEach( BCDoutput => {
    if ( BCDoutput.innerHTML == 1 ) {
      BCDoutput.style.background = "var(--theme-color";
    } else {
      BCDoutput.style.background = "var(--theme-black";
    }

  } );

}