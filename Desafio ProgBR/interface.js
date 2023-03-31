let topDefault = 0;
let leftDefault = 0;
let point = document.getElementById('point');

let nivelWidth = document.getElementById('nivel').clientWidth;
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('nivel').style.height = nivelWidth + 'px';
    point.style.width = (nivelWidth / 100 * 5) + 'px';
    point.style.height = (nivelWidth / 100 * 5) + 'px';
    point.style.top = '48%';
    point.style.left = '48%';

    // let pointPOS = point.getBoundingClientRect();
    // topDefault = pointPOS.x;
    // leftDefault = pointPOS.y;
    
})

