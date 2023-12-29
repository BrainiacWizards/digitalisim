/** Description: 
 * This file contains the code for the canvas
 * it is on truth table page and on counter page
 * later it will be added on flipflops and other pages
**/

const canvas = document.querySelector("#mycanvas")
const ctx = canvas.getContext("2d");
canvas.height = canvas.height
canvas.width = canvas.width
ctx.transform(1, 0, 0, -1, 0, canvas.height)

//Global variables
let intercept = 0
let Ampl = 50

export function drawCanvas(in1, in2, in3, in4, in5) {
    //clear canvas stroke before drawing again
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, -1, 0, canvas.height)
    ctx.beginPath()

    let arr = in5 //genOut
    let arr1 = in1
    let arr2 = in2
    let arr3 = in3
    let arr4 = in4

    //draw genout array
<<<<<<< Updated upstream
    draw(arr, 20, 20)
=======
    if ( arr != undefined || arr != '' ) {
        draw( arr, 20, 20, 10 );
    }

>>>>>>> Stashed changes

    //draw for 1st array
    draw(arr1, 20, 100)

    //draw 2nd array
    draw(arr2, 20, 180)

    //draw 3rd array
    draw(arr3, 20, 260)

    //draw 4th array
    draw(arr4, 20, 330)

    //draw bars using the lenth of the 1st input array
    drawBar(arr1, 25, canvas.height + 30)
}

<<<<<<< Updated upstream
function draw(arr, x, yPos) {
=======
function draw ( arr, x, yPos, count = 0 ) {
>>>>>>> Stashed changes

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) { //draw highs
            intercept = canvas.height - yPos //set it to up
            //sektch
            ctx.moveTo(x, intercept);
            ctx.lineTo(x + Ampl, intercept);

            //draw edge if the next is not on same level
            if (arr[i + 1] == 0) {
                ctx.lineTo(x + Ampl, (canvas.height - Ampl) - yPos);
            }

        } else if (arr[i] == 0) { //draw lows
            intercept = (canvas.height - Ampl) - yPos //set it to up
            //sektch
            ctx.moveTo(x, intercept);
            ctx.lineTo(x + Ampl, intercept);

            //draw edge if the next is not on same level
            if (arr[i + 1] == 1) {
                ctx.lineTo(x + Ampl, canvas.height - yPos);
            }
        }

<<<<<<< Updated upstream
        ctx.strokeStyle = "lightgrey"
=======
        if ( count == 0 ) { ctx.strokeStyle = "grey"; }
        // else if ( count == 1 ) { ctx.strokeStyle = "lightgrey"; }

>>>>>>> Stashed changes
        ctx.stroke();

        //shift horizontaly
        x += Ampl
    }
}

function drawBar(arr, x, y) {

    for (let j = 0; j <= arr.length; j++) {
        for (let i = 0; i < 20; i++) {
            //sektch
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 1);

            ctx.strokeStyle = "lightgrey"
            ctx.stroke()

            //shift horizontaly
            y -= 20
        }

        x += Ampl
        y = canvas.height
    }

}
