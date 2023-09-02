// Desc: This file contains the code for the canvas

export function drawCanvas(in1, in2, in3, in4, in5) {
    //Step 1: Get Canvas reference, and get webgl context
    let canvas = document.querySelector("canvas");
    let gl = canvas.getContext("webgl");

    //Step 2: Set Canvas Color
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    //Step 3: Set Vertices in Array form
    var genInA = in1
    var genInB = in2
    var genInC = in3
    var genInD = in4
    var genOut = in5

    //log console
    console.log("genInA: " + genInA)
    console.log("genInB: " + genInB)
    console.log("genInC: " + genInC)
    console.log("genInD: " + genInD)
    console.log("genOut: " + genOut)

    var lineOut = [
        //Q
        -1.2, 0.7, 0,
        -1.0, 0.7, 0,
        //A
        -1.2, 0.3, 0,
        -1.0, 0.3, 0,
        //B
        -1.2, -0.1, 0,
        -1.0, -0.1, 0,
        //C
        -1.2, -0.5, 0,
        -1.0, -0.5, 0,
        //D
        -1.2, -0.9, 0,
        -1.0, -0.9, 0,
    ]

    const vertices = new Float32Array(lineOut);

    //Step 4: Set color coordinates in Array form (RBG)
    const col = []
    var r, g, b
    var len = vertices.length / 3

    //assign color to every vertex
    for (let i = 0; i < len; i++) {
        if (i < 2) { //white
            r = 1
            b = 1
            g = 1
        } else if (i >= 2 && i < 4) { //red
            r = 1
            b = 0
            g = 0
        } else if (i >= 4 && i < 6) { //blue
            r = 0
            b = 1
            g = 0
        } else if (i >= 6 && i < 8) { //green
            r = 0
            b = 0
            g = 1
        } else if (i >= 8 && i < 10) { //Yellow
            r = 0
            b = 1
            g = 1
        }
        col.push(r, g, b)
    }

    const colors = new Float32Array(col);

    //Step 5: Create, and bind Position buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    //Step 6: Create, and bind Color Buffer
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);

    //Step 6: Create Vertex Shader
    const vsScourse = `
attribute vec3 pos;
attribute vec3 color;
varying vec3 vColor;
uniform float shiftx;
uniform float shifty;

void main(){
    gl_Position = vec4(
        pos.x + shiftx, 
        pos.y + shifty,
        pos.z,
        1.0);
    vColor = color;
}`

    //Step 8: get JS reference for vertex shader, pass and compile shader
    const vertexShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertexShader, vsScourse);
    gl.compileShader(vertexShader);

    //Step 9: Create Fragment Shader
    const fsScourse = `
precision mediump float;
varying vec3 vColor;

void main(){
    gl_FragColor = vec4(vColor, 1.0);
}`

    //Step 10: get JS reference for fragment shader, pass and compile shader
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragmentShader, fsScourse);
    gl.compileShader(fragmentShader);

    //Step 11: Create program, attach shaders and link program
    const program = gl.createProgram()
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    //Step 12: Use program, enable Vertex attributes
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    let pos = gl.getAttribLocation(program, "pos");
    gl.vertexAttribPointer(pos, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(pos);

    //Step 13: Bind buffers (position and color), and set vertex attribute pointers
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    let color = gl.getAttribLocation(program, "color");
    gl.vertexAttribPointer(color, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(color);

    //Step 14: Draw Triangles

    const shiftx = gl.getUniformLocation(program, "shiftx")
    const shifty = gl.getUniformLocation(program, "shifty")
    var x = 0, y = 0

    function draw() {
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);

        canvas.width = 1000
        canvas.height = 300

        if (genOut.includes(1) || genOut.includes(0)) {
            /**************draw output Diagram*************/
            //reset values
            x = 0; y = 0

            for (let i = 0; i < genOut.length; i++) {
                if (genOut[i] == 1) { //move up
                    x += 0.22
                    y = 0.2
                } else if (genOut[i] == 0) { //dont translate y
                    x += 0.22
                    y = 0
                }
                gl.uniform1f(shiftx, x)
                gl.uniform1f(shifty, y)
                gl.drawArrays(gl.LINES, 0, 2);
            }


            //reset values
            x = 0; y = 0
            if (genInA.includes(1) || genInA.includes(0)) {
                for (let i = 0; i < genInA.length; i++) {
                    if (genInA[i] == 1) { //move up
                        x += 0.22
                        y = 0.2
                    } else if (genInA[i] == 0) { //dont translate y
                        x += 0.22
                        y = 0
                    }

                    gl.uniform1f(shiftx, x)
                    gl.uniform1f(shifty, y)
                    gl.drawArrays(gl.LINES, 2, 2);
                }
            }

            /**************draw B Diagram*************/
            //reset values
            x = 0; y = 0
            if (genInB.includes(1) || genInB.includes(0)) {
                for (let i = 0; i < genInB.length; i++) {
                    if (genInB[i] == 1) { //move up
                        x += 0.22
                        y = 0.2
                    } else if (genInB[i] == 0) { //dont translate y
                        x += 0.22
                        y = 0
                    }

                    gl.uniform1f(shiftx, x)
                    gl.uniform1f(shifty, y)
                    gl.drawArrays(gl.LINES, 4, 2);
                }
            }

            /**************draw C Diagram*************/
            //reset values
            x = 0; y = 0
            if (genInC.includes(1) || genInC.includes(0)) {
                for (let i = 0; i < genInC.length; i++) {
                    if (genInC[i] == 1) { //move up
                        x += 0.22
                        y = 0.2
                    } else if (genInC[i] == 0) { //dont translate y
                        x += 0.22
                        y = 0
                    }

                    gl.uniform1f(shiftx, x)
                    gl.uniform1f(shifty, y)
                    gl.drawArrays(gl.LINES, 6, 2);

                }
            }

            /**************draw D Diagram*************/
            //reset values
            x = 0; y = 0
            if (genInD.includes(1) || genInD.includes(0)) {
                for (let i = 0; i < genInD.length; i++) {
                    if (genInD[i] == 1) { //move up
                        x += 0.22
                        y = 0.2
                    } else if (genInD[i] == 0) { //dont translate y
                        x += 0.22
                        y = 0
                    }

                    gl.uniform1f(shiftx, x)
                    gl.uniform1f(shifty, y)
                    gl.drawArrays(gl.LINES, 8, 2);

                }
            }
        }

    }


    draw();


    /***********Debug SHaders**********/
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader))
        }
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader))
        }
    }
}