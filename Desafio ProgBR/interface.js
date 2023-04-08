let topDefault = 0;
let leftDefault = 0;
let point = document.getElementById('point');

let nivelWidth = document.getElementById('nivel').clientWidth;

document.getElementById('nivel').style.height = nivelWidth + 'px';

let pointWidth = (nivelWidth / 100 * 5)
point.style.width = pointWidth + 'px';
point.style.height = pointWidth + 'px';

let pointPositionTOP = (nivelWidth / 2) - (pointWidth / 2)
point.style.top = pointPositionTOP + 'px';

let pointPositionLEFT = (nivelWidth / 2) - (pointWidth / 2)
point.style.left = pointPositionLEFT + 'px';

    // let pointPOS = point.getBoundingClientRect();
    // topDefault = pointPOS.x;
    // leftDefault = pointPOS.y;



