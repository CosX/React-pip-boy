import GetApiKey from '../utils/apikey.js';
import Fetch from '../utils/get.js';

export default class Elevation{
  constructor(isactive = false){
    this.displayName = "Elevation";
    this.dataValue = "";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude,
            lon = position.coords.longitude,
            path = `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lon}&key=${GetApiKey()}`;

        Fetch(path).then((locations) => {
          this.dataValue = locations[0].elevation;
        })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getDescription(){
    return "The Google Maps Elevation API provides elevation data for all locations on the surface of the earth, " +
    "including depth locations on the ocean floor (which return negative values). In those cases where Google does " +
    "not possess exact elevation measurements at the precise location you request, the service will interpolate and " +
    "return an averaged value using the four nearest locations."
  }
}
