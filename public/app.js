var init =function(){
  var container = document.getElementById('main-map');
  var center = {lat: 51.5, lng: -0.127758}
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addMarker(center);
  mainMap.addInfoWindow();
  mainMap.addClickEvent();
}

window.onload = init;