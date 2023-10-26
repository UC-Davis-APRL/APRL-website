function initMap() {

    var map = new google.maps.Map(document.getElementById('ieatmaps'), {
      center: {lat: 32.754446, lng: -97.224821},
      zoom: 12
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(32.754446, -97.224821)
        , title: 'ASL'
        , map : map

    });
  }
