
// Geo Location
var gpsOptions = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0
};

const gpsDat = { lat: 0.0, lon: 0.0, hed: 0.0, spd: 0.0, alt: 0.0, acr: 0.0 };

function gpsSuccess(pos) {
    var crd = pos.coords;
    gpsDat.lat = pos.coords.latitude;
    gpsDat.lon = pos.coords.longitude;
    gpsDat.hed = pos.coords.heading;
    gpsDat.spd = pos.coords.speed;
    gpsDat.alt = pos.coords.altitude;
    gpsDat.acr = pos.coords.accuracy;
}

function gpsError(err) {

    document.querySelector('#wrn_msg').innerHTML = `ERROR(${err.code}): ${err.message}`;

}



// Distance in KM
// function getDistance(lat1, lon1, lat2, lon2) {
//     var R = 6371; // Radius of the earth in km
//     var dLat = deg2rad(lat2 - lat1);  // deg2rad below
//     var dLon = deg2rad(lon2 - lon1);
//     var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2)
//         ;
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     var d = R * c; // Distance in km
//     return d;
// }

// function deg2rad(deg) {
//     return deg * (Math.PI / 180);
// }

// Compass 0 - 359

// Atitude  

function handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180], x, 'front to back'
    var y = event.gamma; // In degree in the range [-90,90], y, 'left to right'
    var z = event.alpha; // 0-360, z, compass orientation

    // coord 1: 0,0
    // coord 2: x,y
    // calculate the angle

    var rad = Math.atan2(y, x);
    var deg = rad * (180 / Math.PI);

    // take into account if phone is held sideways / in landscape mode
    var screenOrientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    // 90, -90, or 0
    var angle = screenOrientation.angle || window.orientation || 0;

    deg = deg + angle;

    watercup.innerHTML = Math.round(deg);
    watercup.style.transform = 'rotate(' + -deg + 'deg)';
}

window.addEventListener('deviceorientation', handleOrientation);
