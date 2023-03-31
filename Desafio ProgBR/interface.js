let topDefault = 0;
let leftDefault = 0;
let point = document.getElementById('point');


document.addEventListener('DOMContentLoaded', () => {
    let width = document.getElementById('nivel').clientWidth;
    document.getElementById('nivel').style.height = width + 'px';
    document.getElementById('point').style.width = (width / 100 * 5) + 'px';
    document.getElementById('point').style.height = (width / 100 * 5) + 'px';
    point.style.top = '48%';
    point.style.left = '48%';

    let pointPOS = point.getBoundingClientRect();
    topDefault = pointPOS.x;
    leftDefault = pointPOS.y;
    
})

