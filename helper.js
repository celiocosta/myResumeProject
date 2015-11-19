var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLskype = '<li class="flex-item"><span class="orange-text">skype</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" style="width:100px;height:140px;">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkEmployer2 = '<div class="work-entry1">%data%</div>';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectUrl = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" style="width:304px;height:228px;">';

var HTMLschoolStart = '<div class="education-entry"><h3>University</h3></div>';
var HTMLschoolNameAndDegree = '<a href="#">%data%</a>';
var HTMLschoolDates = '<div class="date-text">%data% </div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';


var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function () {
    $('button').click(function () {
        var iName = internationalizeName() || function () {
            };
        $('#name').html(iName);
    });
});

clickLocations = [];

function logClicks(x, y) {
    clickLocations.push(
        {
            x: x,
            y: y
        }
    );
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});


var map;    // declares a global map variable


/*
 Start here! initializeMap() is called when page is loaded.
 */
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
     locationFinder() returns an array of every location string from the JSONs

     */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    }

    /*
     createMapMarker(placeData) reads Google Places search results to create map pins.

     */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        google.maps.event.addListener(marker, 'click', function () {

            infoWindow.open(map, marker);
        });

        bounds.extend(new google.maps.LatLng(lat, lon));

        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
     callback(results, status) makes sure the search returned results for a location.
     If so, it creates a new map marker for that location.
     */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
     pinPoster(locations) takes in the array of locations created by locationFinder()
     and fires off Google place searches for each location
     */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function (e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
