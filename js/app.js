// hard coded places data
var places = [
  {
    locName: "The Boxer Boston",
    lat: 42.3639135,
    lng: -71.0646678,
    locType: "hotel",
    description: "Industrial-chic boutique hotel in a 1904 building offering free WiFi & a restaurant."
  },
  {
    locName: "Boston Harbor Hotel",
    lat: 42.3565263,
    lng: -71.05239,
    locType: "hotel",
    description: "Hotel with elegant rooms (some with water views), plus an indoor pool, a spa & chic dining."
  },
  {
    locName: "Boston Marriott Long Wharf",
    lat: 42.3601891,
    lng: -71.0530712,
    locType: "hotel",
    description: "Relaxed lodging with an indoor swimming pool, a fitness center & a restaurant with New England fare."
  },
  {
    locName: "Battery Wharf Hotel Boston Waterfront",
    lat: 42.367472,
    lng: -71.0524387,
    locType: "hotel",
    description: "Upscale harborfront hotel offering an on-site maritime museum, a spa, a gym & posh dining."
  },
  {
    locName: "Onyx Hotel",
    lat: 42.364205,
    lng: -71.0635497,
    locType: "hotel",
    description: "Upscale boutique hotel offering stylish rooms with yoga mats plus a snazzy cocktail lounge."
  },
  {
    locName: "Hyatt Regency Boston",
    lat: 42.353643,
    lng: -71.0629227,
    locType: "hotel",
    description: "Posh lodging featuring a saltwater pool, plus a restaurant, a coffee lounge & a gym."
  },
  {
    locName: "W Boston",
    lat: 42.350811,
    lng: -71.0677677,
    locType: "hotel",
    description: "Modern, stylish hotel in a glass high-rise offering sleek rooms plus an on-site spa & buzzy lounge."
  },
  {
    locName: "Taj Boston",
    lat: 42.3528364,
    lng: -71.0737866,
    locType: "hotel",
    description: "1927 landmark (which overlooks the Public Garden) offering luxurious rooms & sophisticated dining."
  },
  {
    locName: "The Liberty",
    lat: 42.361995,
    lng: -71.0727247,
    locType: "hotel",
    description: "Jail-turned-luxury hotel with contemporary rooms, plus a striking atrium, hip bars & dining."
  },
  {
    locName: "Union Oyster House",
    lat: 42.361288,
    lng: -71.0590969,
    locType: "restaurant",
    description: "Historic eatery serving chowder & other New England seafood standards since 1826."
  },
  {
    locName: "Lucca Restaurant",
    lat: 42.3612866,
    lng: -71.0744178,
    locType: "restaurant",
    description: "Intimate pick for traditional Northern Italian dishes, with a focus on seasonal produce."
  },
  {
    locName: "Cheers Boston",
    lat: 42.3559634,
    lng: -71.0734113,
    locType: "restaurant",
    description: "Tourists visit this classic bar with iconic facade for pub grub, pints & nostalgia."
  },
  {
    locName: "Meritage Restaurant",
    lat: 42.3564695,
    lng: -71.0523821,
    locType: "restaurant",
    description: "'Vineyard-to-table' fare pairs with fine wines at this waterfront spot at the Boston Harbor Hotel."
  },
  {
    locName: "Nico Ristorante",
    lat: 42.3656594,
    lng: -71.0548829,
    locType: "restaurant",
    description: "North End nook serving classic Italian fare & wines in a sultry setting accented with red curtains."
  },
  {
    locName: "Chart House",
    lat: 42.3601751,
    lng: -71.0516195,
    locType: "restaurant",
    description: "High-end chain eatery serving seafood & steakhouse fare in a classy setting with view."
  },
  {
    locName: "No.9 Park",
    lat: 42.3576196,
    lng: -71.0649831,
    locType: "restaurant",
    description: "Upscale French- & Italian-inspired dishes & European wines served in an elegant townhouse space."
  },
  {
    locName: "Hillstone",
    lat: 42.3592067,
    lng: -71.0585752,
    locType: "restaurant",
    description: "Upscale chain eatery featuring steak, seafood & pasta alongside specialty cocktails."
  },
  {
    locName: "Grotto",
    lat: 42.3599162,
    lng: -71.0652336,
    locType: "restaurant",
    description: "Subterranean hideaway boasts refined Italian cooking, notable wine list & nightly prix fixe option."
  },
  {
    locName: "The Oceanaire Seafood Room",
    lat: 42.3590276,
    lng: -71.0614935,
    locType: "restaurant",
    description: "High-end chain offering seafood, steaks & a deep wine list in sophisticated but lively environs."
  },
  {
    locName: "The Paul Revere House",
    lat: 42.3637501,
    lng: -71.0558709,
    locType: "landmark",
    description: "Revere's legendary ride began at this restored Colonial-era home, which includes family furnishings. - Google"
  },
  {
    locName: "Old South Meeting House",
    lat: 42.3569911,
    lng: -71.06056,
    locType: "landmark",
    description: "National Historic Landmark & original site of the Boston Tea Party, reenacted here each December 16."
  },
  {
    locName: "Old North Church",
    lat: 42.3663259,
    lng: -71.0565831,
    locType: "landmark",
    description: "Hallowed 18th-century church & launch point for Paul Revere's revolutionary ride, with tours & more."
  },
  {
    locName: "Boston Tea Party Ships & Museum",
    lat: 42.3521762,
    lng: -71.0534643,
    locType: "landmark",
    description: "Floating history museum with live reenactments, multimedia exhibits & a tearoom."
  },
  {
    locName: "USS Constitution Museum",
    lat: 42.3739796,
    lng: -71.0576126,
    locType: "landmark",
    description: "Interactive museum near the 1797 wooden frigate made famous as 'Old Ironsides' in the War of 1812."
  },
  {
    locName: "Bunker Hill Monument",
    lat: 42.3763541,
    lng: -71.0629651,
    locType: "landmark",
    description: "Marking the Battle of Bunker Hill, this 221-ft. granite obelisk features 294 steps & scenic views."
  },
  {
    locName: "First Church in Boston",
    lat: 42.353651,
    lng: -71.0770027,
    locType: "landmark",
    description: "Unitarian Universalist Church founded in 1630 by John Winthrop's original Puritan settlement in Boston. - Wikipedia"
  },
  {
    locName: "King's Chapel",
    lat: 42.3580257,
    lng: -71.0621833,
    locType: "landmark",
    description: "Historic Unitarian Christian church founded in 1686 with daily crypt & bell tower tours."
  },
  {
    locName: "Massachusetts State House",
    lat: 42.3587772,
    lng: -71.0659988,
    locType: "landmark",
    description: "Grand, circa-1795 building where the state legislature meets, with monuments, free tours & more."
  }
];



// Google API map
function MapView() {

  var self = this;

  // Create a map object and specify the DOM element for display.
  // Set initial center location at my house
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 42.3602877, lng: -71.066541},
    scrollwheel: false,
    zoom: 14
  });


  // define map marker/icon
  // constructor function returns object
  self.setMarker = function(data) {
    "use strict";

    var lat = data.lat,
        lng = data.lng,
        locName = data.locName,
        image;

    if (data.locType == "hotel") {
      image = "http://static.ctctcdn.com/lp/images/standard/icons/lightbulb.svg";
    } else if (data.locType == "landmark") {
      image = "http://static.ctctcdn.com/lp/images/standard/pricing/icon-piggy.svg";
    } else if (data.locType == "restaurant") {
      image = "http://static.ctctcdn.com/lp/images/standard/pricing/icon-circle-check.svg";
    }

    var marker = new google.maps.Marker({
      map: map,
      position: {lat: lat, lng: lng},
      title: locName,
      icon: image
    });

   // console.log(this);

  };
}
// ===============================

// declare viewmodel
function AppViewModel(mapApp) {
  "use strict"; 
  
  var self = this;

  // create the array of marker objects
  self.markerList = [ko.observableArray()];

  // go thru the JSON that holds all locations and add them to the array, then 
  // send each location to the function that puts markers on the map
  places.forEach( function(place) {    
    self.markerList.push( new mapApp.setMarker(place) );
  });

  // self.getMarkerArray = function(){
  //   return self.markerList();
  // };


console.log(self.markerList);
// console.log(self.getMarkerArray());

// console.log('The length of the array is ' + self.markerList().length);
// console.log(self.markerList()[0]);


}



// ===============================

function initializeApp() {

  var MapApp = new MapView();
  
  // Start ViewModel to make sure it initializes after Google map loads
  var viewmodel = new AppViewModel(MapApp);
  
  // Activates knockout.js
  ko.applyBindings(viewmodel);
}






