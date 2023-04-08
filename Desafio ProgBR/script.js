
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationabsolute', (event) => {

        if (event.alpha !== undefined) {
            document.getElementById('alpha').innerHTML = `<p>alpha: ${event.alpha}</p>`
        }
        if (event.beta !== undefined) {
            document.getElementById('beta').innerHTML = `<p>beta: ${event.beta}</p>`
            changePointStateX(event.beta);
        }
        if (event.gamma !== undefined) {
            document.getElementById('gamma').innerHTML = `<p>gamma: ${event.gamma}</p>`
            changePointStateY(event.gamma)
        }
        if (event.absolute !== undefined) {
            document.getElementById('absolute').innerHTML = `<p>absolute: ${event.absolute}</p>`
        }
        
    })
} else { document.getElementById('info').innerHTML = `<p>error</p>` }

function changePointStateX(axis) {
    point.style.top = pointPositionTOP + (axis*4) + 'px'
}
function changePointStateY(axis) {
    point.style.left = pointPositionLEFT + (axis*4) + 'px'
}

