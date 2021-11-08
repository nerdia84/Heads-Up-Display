// User menu

$(document).ready(function () {

    navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError, gpsOptions);

    $('#wrn_ico').on('click', function () {
        $('#gps_lat').html("Lat : " + gpsDat.lat);
        $('#gps_lon').html("Lon : " + gpsDat.lon);
        console.log(gpsDat);

        $('#wrn_msg').html("~ " + gpsDat.acr + " m");
        if (gpsDat.acr > 50) {
            $('#wrn_fa').removeClass('fa-satellite-dish').addClass('fa-exclamation-triangle');
        }
    });

});