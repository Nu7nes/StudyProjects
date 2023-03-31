if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientationabsolute', (event) => {

        if (event.alpha !== undefined) {
            console.log('valor de alpha mudou para:', event.alpha);
            document.getElementById('info').innerHTML += `<p>alpha: ${event.alpha}</p>`
        }
        if (event.beta !== undefined) {
            console.log('valor de beta mudou para:', event.beta);
            document.getElementById('info').innerHTML += `<p>beta: ${event.beta}</p>`
        }
        if (event.gamma !== undefined) {
            console.log('valor de gamma mudou para:', event.gamma);
            document.getElementById('info').innerHTML += `<p>gamma: ${event.gama}</p>`
        }
        // if (event.absolute !== undefined) {
        //     console.log('valor de absolute mudou para:', event.absolute);
        // }
        console.log(event)
    })
} else {document.getElementById('info').innerHTML += `<p>error</p>`}

// window.addEventListener("devicemotion", (event) => {
//     document.getElementById('info').innerHTML += `<p>S</p>${event.acceleration.x}`;
//   });

// function changePointState() {
//     // point.style.top = topDefault - x +'px'
//     // point.style.left
//     // topDefault
//     // leftDefault
//     document.getElementById('info').innerHTML += `<p>S</p><p>${topDefault}</p>`
// }
// changePointState();