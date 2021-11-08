// User menu

$(document).ready(function () {

    navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError, gpsOptions);

    $('#wrn_ico').on('click', function () {
        $('#gps_lat').html("Lat : " + gpsDat.lat);
        $('#gps_lon').html("Lon : " + gpsDat.lon);

        $('#gps_spd').html("Speed : " + gpsDat.spd + " mps");
        $('#gps_hed').html("Heading : " + gpsDat.hed + " &#176");

        $('#gps_tim').html("Time : " + gpsDat.acr);
        $('#gps_alt').html("Alt : " + gpsDat.alt + " m");

        $('#gyro_p').html("Pitch : " + gyroDat.x + " &#176");
        $('#gyro_r').html("Roll : " + gyroDat.y + " &#176");
        $('#gyro_y').html("Yaw : " + gyroDat.z + " &#176");

        console.log(gpsDat);
        console.log(gyroDat);

        $('#wrn_msg').html("~ " + gpsDat.acr + " m");
        if (gpsDat.acr > 50) {
            $('#wrn_fa').removeClass('fa-satellite-dish').addClass('fa-exclamation-triangle');
        }
    });

});