
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