//Init Google Map 
var map;
function initMap() {

    var storage = new google.maps.LatLng(41.995843, 24.088254);
    var store1 = new google.maps.LatLng(41.987402, 24.083208);
    var store2 = new google.maps.LatLng(41.988063, 24.090988);

    var myOptions = {
        zoom: 14,
        center: storage,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'),
        myOptions);

    var marker = new google.maps.Marker({
        position: storage,
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: store1,
        map: map
    });

    var marker3 = new google.maps.Marker({
        position: store2,
        map: map
    });
}
//google.maps.event.addDomListener(window, 'load', initMap);