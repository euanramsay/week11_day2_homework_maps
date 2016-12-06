var MapWrapper = function(container, center, zoom){
  
  this.googleMap = new google.maps.Map(container, 

  {
    center: center,
    zoom: zoom
  }

  );
}

MapWrapper.prototype = {

  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map:this.googleMap
    }) 
  },
  //   var infoWindow = new google.maps.InfoWindow({
  //     console.log(this);
  //     content: 'Hello there!'
  // },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = event.latLng;
      console.log(this);
      this.addMarker(position);
      // console.log("Yo I got called");
      // console.log(event);
      // console.log(event.latLng.lat());
      // console.log(event.latLng.lng());
    }.bind(this))
  }

};

