// hard coded places data
var places = [
  {
  	locationName: "Willy's Steakhouse Grill & Sushi Bar",
  	lat: 42.296336,
  	lng: -71.714096
  },
  {
  	locationName: "Bauhinia",
  	lat: 42.278272,
  	lng: -71.711049
  },
  {
  	locationName: "Buffalo Wild Wings",
  	lat: 42.276170,
  	lng: -71.719688
  },
  {
  	locationName: "Sawa Asian Bistro",
  	lat: 42.277352,
  	lng: -71.717324
  },
  {
  	locationName: "Pepperoni Express",
  	lat: 42.275711,
  	lng: -71.732799
  },
  {
  	locationName: "Imperial Buffet",
  	lat: 42.277386,
  	lng: -71.737059
  },
  {
  	locationName: "Five Guys Burgers and Fries",
  	lat: 42.274004,
  	lng: -71.752691
  },
  {
  	locationName: "Jimmy's Tavern & Grill",
  	lat: 42.273990,
  	lng: -71.754011
  },
  {
  	locationName: "2ovens",
  	lat: 42.274178,
  	lng: -71.751188
  },
  {
  	locationName: "Domino's Pizza",
  	lat: 42.274913,
  	lng: -71.742043
  },
  {
  	locationName: "Village Pizza",
  	lat: 42.295427,
  	lng: -71.717016
  }
];



// Google API map
function initMap() {

	var self = this;

  // Create a map object and specify the DOM element for display.
  // Set initial center location at my house
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.2843358, lng: -71.7297992},
    scrollwheel: false,
    zoom: 13
  });

  // basic marker 
  // var marker = new google.maps.Marker({
  //   position: {lat: 42.2843358, lng: -71.7297992},
  //   map: map,
  //   title: 'Hello World!'
  // });


  // http://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example?rq=1

  // console.log(places[1].lat);

  // for (var i = 0; i < places.length; i++) {  
  //   var marker = new google.maps.Marker({
  //     position: {lat: places[i].lat, lng: places[i].lng},
  //     map: map,
  //     title: places[i].locationName
  //   });
  // }

  // http://stackoverflow.com/questions/14927258/using-json-to-add-markers-to-google-maps-api?rq=1
  // function addMarker(lat,lng) {
  //   marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(lat,lng),
  //   map: map,
  //   });
  //   markersArray.push(marker);
  // }
  // ===========


	self.setMarker = function(data) {

		var lat = data.lat,
		    lng = data.lng,
		    locationName = data.locationName;

		var marker = new google.maps.Marker({
	    map: map,
	    position: {lat: lat, lng: lng},
	    title: locationName
		});

	}
}


console.log(places);

// declare viewmodel
function AppViewModel(mapApp) {
  "use strict"; 
	
  var self = this;

	// self.markerList = ko.observableArray([]);
  self.markerList = [ko.observableArray([])];



  // if (!self.markerList.isArray){
  //   console.log("self.markerList is not an array 1");
  // } else {
  //   console.log("array 1");
  // }


  places.forEach( function(place) {
    self.markerList.push( new mapApp.setMarker(place) );
  });


  // if (!self.markerList.isArray){
  //   console.log("self.markerList is not an array 2");
  // } else {
  //   console.log("array 2");
  // }




	// console.log(self.markerList.length);

  // =========
  // places.forEach(function(places){
  //  self.markerList.push( new mapApp.Marker(places) );
  // });

	// this.currentMarker = ko.observable( this.markerList()[0] );

	// self.allPlaces = [];

	// places.forEach(function(place){
	// 	self.allPlaces.push(new Place(place));
	// });


}

// Activates knockout.js
// ko.applyBindings(new AppViewModel());

// =================
var viewmodel;

function initializeApp() {

	var MapApp = new initMap();
  
	// Start ViewModel to make sure it initializes after Google map loads
	viewmodel = new AppViewModel(MapApp);

	ko.applyBindings(viewmodel);
}






