/** Description: 
 * This file contains the code for the canvas
 * it is on truth table page and on counter page
 * later it will be added on flipflops and other pages
**/

const canvas = document.querySelector( "#mycanvas" );
const ctx = canvas.getContext( "2d" );
canvas.height = canvas.height;
canvas.width = canvas.width;
ctx.transform( 1, 0, 0, -1, 0, canvas.height );

//Global variables
let intercept = 0;
let Ampl = 50;

export function drawCanvas ( in1, in2, in3, in4, in5 ) {
    //clear canvas stroke before drawing again
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.setTransform( 1, 0, 0, -1, 0, canvas.height );
    ctx.beginPath();

    let arr = in5; //output
    let arr1 = in1;
    let arr2 = in2;
    let arr3 = in3;
    let arr4 = in4;

    //draw genout array
    if ( arr != undefined || arr != '' ) {
        draw( arr, 20, 20, 0 );
    }


    //draw for 1st array
    if ( arr1 != undefined || arr1 != '' ) {
        draw( arr1, 20, 100, 1 );
    }
    //draw 2nd array
    if ( arr2 != undefined || arr2 != '' ) {
        draw( arr2, 20, 180, 2 );
    }

    //draw 3rd array
    if ( arr3 != undefined || arr3 != '' ) {
        draw( arr3, 20, 260, 3 );
    }

    //draw 4th array
    if ( arr4 != undefined || arr4 != '' ) {
        draw( arr4, 20, 330, 4 );
    }

    //draw bars using the lenth of the 1st input array
    if ( arr1 != undefined || arr1 != '' ) {
        drawBar( arr1, 25, canvas.height + 30, 5 );
    }
}

function draw ( arr, x, yPos, count ) {

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] == 1 ) { //draw highs
            intercept = canvas.height - yPos; //set it to up
            //sektch
            ctx.moveTo( x, intercept );
            ctx.lineTo( x + Ampl, intercept );

            //draw edge if the next is not on same level
            if ( arr[ i + 1 ] == 0 ) {
                ctx.lineTo( x + Ampl, ( canvas.height - Ampl ) - yPos );
            }

        } else if ( arr[ i ] == 0 ) { //draw lows
            intercept = ( canvas.height - Ampl ) - yPos; //set it to up
            //sektch
            ctx.moveTo( x, intercept );
            ctx.lineTo( x + Ampl, intercept );

            //draw edge if the next is not on same level
            if ( arr[ i + 1 ] == 1 ) {
                ctx.lineTo( x + Ampl, canvas.height - yPos );
            }
        } else {
            ctx.moveTo( 0, intercept );
            ctx.lineTo( 0, intercept );
        }

        // if ( count == 1 ) ctx.strokeStyle = "lightgrey";
        if ( count == 2 ) ctx.strokeStyle = "red";
        if ( count == 3 ) ctx.strokeStyle = "blue";
        if ( count == 4 ) ctx.strokeStyle = "green";
        if ( count == 5 ) ctx.strokeStyle = "yellow";

        ctx.stroke();

        //shift horizontaly
        x += Ampl;
    }
}

function drawBar ( arr, x, y ) {

    for ( let j = 0; j <= arr.length; j++ ) {
        for ( let i = 0; i < 20; i++ ) {
            //sektch
            ctx.moveTo( x, y );
            ctx.lineTo( x, y - 1 );

            ctx.strokeStyle = "lightgrey";
            ctx.stroke();

            //shift horizontaly
            y -= 20;
        }

        x += Ampl;
        y = canvas.height;
    }

}
