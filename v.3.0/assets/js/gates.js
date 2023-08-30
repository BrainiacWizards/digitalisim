
/*******Define logic Gate Functions*******/
export function andGate(in1, in2) {
    let out
    if (in1 == 1 && in2 == 1) {
        out = 1;
    } else if (in1 == 0 && in2 == 0) {
        out = 0;
    } else if (in1 == 0 && in2 == 1) {
        out = 0;
    } else if (in1 == 1 && in2 == 0) {
        out = 0;
    }

    return out;
}

export function orGate(in1, in2) {
    let out
    if (in1 == 1 && in2 == 1) {
        out = 1;
    } else if (in1 == 0 && in2 == 0) {
        out = 0;
    } else if (in1 == 0 && in2 == 1) {
        out = 1;
    } else if (in1 == 1 && in2 == 0) {
        out = 1;
    }

    return out;
}

export function notGate(in1) {
    let out
    if (in1 == 1) {
        out = 0;
    } else if (in1 == 0) {
        out = 1;
    }

    return out;
}

export function xorGate(in1, in2) {
    let out
    if (in1 == 1 && in2 == 1) {
        out = 0;
    } else if (in1 == 0 && in2 == 0) {
        out = 0;
    } else if (in1 == 0 && in2 == 1) {
        out = 1;
    } else if (in1 == 1 && in2 == 0) {
        out = 1;
    }

    return out;
}

export function nandGate(in1, in2) {
    let out
    out = notGate(andGate(in1, in2))
    return out
}

export function norGate(in1, in2) {
    let out
    out = notGate(orGate(in1, in2))
    return out
}

/************function for a clock***********/
let clk = 0, clkC = 1, edge = 0, timer = 0
export function clock() {

    //assign prev clock value to the temp variable
    var temp = clk

    //change clock per second
    if (timer % 60 == 0) {
        clkC *= -1

        if (clkC === 1) {
            clk = 0;
        } else if (clkC === -1) {
            clk = 1;
        }
    }

    //compare current clock with prev clock (temp)
    if (clk != temp && temp == 0) {
        edge = 1
    } else if (clk === temp) {
        edge = 0
    }


    //if clock and temp are not the same then that is an edge
    //temp will change with less than a second which is good

    timer++
    return edge
}