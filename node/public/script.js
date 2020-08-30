// =-=-=-=-=-=-=-=-=-=-=
// P5JS script
// =-=-=-=-=-=-=-=-=-=-=

'use strict';
let resX = 1;
let resY = 5;
let speed = 100;
let scaleVal = 1;
let sizeDots = 4;

let url = './update';

function setup() {
    createCanvas(windowWidth, 500);
}

function draw() {
    frameRate(speed);
    translate(20, height);
    stroke(220);
    fill(220);
    line(0, 0, 0, -height);
    line(-20, -20, width, -20);
    noStroke();
    scale(scaleVal);
    let inputNum = frameCount + 1;
    sizeDots += frameCount * 0.000005;
    let data = { inputNum: inputNum, };

    httpPost(url, 'json', data, function (result) {
        let resNum = result.resNum;
        ellipse(inputNum * resX, -20 - resNum * resY, sizeDots, sizeDots);
    });

}