const convform = document.querySelector(".converter-form");
const dec = document.querySelector("#dec");
const bin = document.querySelector("#bin");
const errors = document.querySelector(".errors");
const outDec = document.querySelector("#decValue");

var binArr = [];
var decValue = 0;

//form submission
convform.onsubmit = (e) => {
  e.preventDefault();

  //reset values before recalculating
  reset();

  //get values
  if (!bin.value) {
    errors.innerText = "enter binary value";
    console.error("enter binary value");
    bin.style.borderColor = "red";
  } else {
    errors.innerText = "";
    bin.style.borderColor = "grey";
    binArr = bin.value.split("");
    binArr.reverse();

    //call converter function
    binToDec();
  }
};

//decimal to binary conversion
//function decToBin() {}

//binary to decimal
function binToDec() {
  //conversion logic
  for (let i = 0; i < binArr.length; i++) {
    if (binArr[i] == 1) {
      decValue += Math.pow(2, i);
    }
  }

  outDec.innerText = decValue;
}

function reset() {
  binArr = [];
  decArr = [];
  decValue = 0;
}
