function makeLine (size) {
    let makeLineStr = '';
    for (let i = 0; i < size; i++) {
        makeLineStr = makeLineStr + '#';
    }
    return makeLineStr;
}

function makeSquare (squareSize) {
    let makeSquareStr = '';
    let makeLineOutput = makeLine(squareSize);
    for (let i = 0; i < squareSize - 1; i++) {
        makeSquareStr += makeLineOutput + "\n";
    }
    makeSquareStr += makeLineOutput;
    return makeSquareStr;
}

function makeRectangle (rectangleWidth, rectangleHeight) {
    let makeRectangleStr = '';
    let makeLineOutput = makeLine(rectangleWidth);
    for (let i = 0; i < rectangleHeight - 1; i++) {
        makeRectangleStr += makeLineOutput + "\n";
    }
    makeRectangleStr += makeLineOutput;
    return makeRectangleStr;
}

function makeDownwardStairs (downwardStairsHeight) {
    let makeDownwardStairsStr = '';
    for (let i = 1; i < downwardStairsHeight + 1; i++) {
        if (i === downwardStairsHeight) {
            makeDownwardStairsStr += makeLine(i);
        } else {
            makeDownwardStairsStr += makeLine(i) + "\n";
        }
    }
    return makeDownwardStairsStr;
}

function makeSpaceLine (numSpaces, numChars) {
    let makeSpaceLineStr = '';
    makeSpaceLineStr = makeLine(numChars);
    for (let i = 0; i < numSpaces; i++) {
        makeSpaceLineStr = " " + makeSpaceLineStr + " ";
    }
    return makeSpaceLineStr;
}

function makeIsoscelesTriangle (isoscelesTriangleHeight) {
    let makeIsoscelesTriangleStr = '';
    for (let i = 0; i < isoscelesTriangleHeight; i++) {
       if (i === isoscelesTriangleHeight) {
        makeIsoscelesTriangleStr += makeSpaceLine((isoscelesTriangleHeight - i - 1), (2 * i + 1));
       } else {
        makeIsoscelesTriangleStr += makeSpaceLine((isoscelesTriangleHeight - i - 1), (2 * i + 1)) + "\n";
       }
    }
    return makeIsoscelesTriangleStr
} 

function makeUpsideDownIsoscelesTriangle (height) {
    let makeUpsideDownIsoscelesTriangleStr = '';
    for (let i = height - 1; i > -1; i--) {
       if (i === 0) {
        makeUpsideDownIsoscelesTriangleStr += makeSpaceLine((height - i - 1), (2 * i + 1));
       } else {
        makeUpsideDownIsoscelesTriangleStr += makeSpaceLine((height - i - 1), (2 * i + 1)) + "\n";
       }
    }
    return makeUpsideDownIsoscelesTriangleStr;
}

function makeDiamond(diamondHeight) {
    let makeDiamondStr = '';
    makeDiamondStr += makeIsoscelesTriangle(diamondHeight);
    // makeDiamondStr += "\n";
    makeDiamondStr += makeUpsideDownIsoscelesTriangle(diamondHeight);
    return makeDiamondStr
}
console.log(makeDiamond(5));