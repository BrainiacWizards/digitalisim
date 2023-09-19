// Desc: This file contains the code for the canvas
//global variables
var intercept
const canvas = document.querySelector("#mycanvas")
const ctx = canvas.getContext("2d");
canvas.height = canvas.height
canvas.width = canvas.width
ctx.transform(1, 0, 0, -1, 0, canvas.height)

export function drawCanvas(in1, in2, in3, in4, in5) {

let arr = in1
let arr2 = in2
let arr3 = in3
	
 alert(in1, in2)
//draw for 1st array
draw(arr, 20, -50)
//draw for second array
draw(arr2, 20, 50)
//draw 3rd array
draw(arr3, 20, 150)

//draw bars
drawBar(arr, 25, 350)

window.requestAnimationFrame(drawCanvas())
}

function draw(arr, x, yPos){

	for(let i = 0; i < arr.length; i++){
      if(arr[i] == 1){ //draw highs
          intercept = 270 - yPos //set it to up
          //sektch
          ctx.moveTo(x, intercept);
          ctx.lineTo(x+50, intercept);

          //draw edge if the next is not on same level
          if(arr[i+1] == 0){
              //ctx.lineTo(x+50, 200 - yPos);
          }

      } else if(arr[i] == 0) { //draw lows
          intercept = 200 - yPos //set it to up
          //sektch
          ctx.moveTo(x, intercept);
          ctx.lineTo(x+50, intercept);

          //draw edge if the next is not on same level
          if(arr[i+1] == 1){
              //ctx.lineTo(x+50, 270 - yPos);
          }
      }
    
      ctx.strokeStyle = "lightgrey"
      ctx.stroke();

      //shift horizontaly
      x += 50
	}
}

function drawBar(arr, x, y){

  for(let j = 0; j <= arr.length; j++){
      for(let i = 0; i < 20; i++){
        //sektch
        ctx.moveTo(x, y);
        ctx.lineTo(x, y-1);
        
        ctx.strokeStyle = "lightgrey"
        ctx.stroke()

        //shift horizontaly
        y -= 20
      }
      
      x += 50
      y = 350
  }
	
} 
