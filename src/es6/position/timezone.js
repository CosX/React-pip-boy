import GetApiKey from '../utils/apikey.js';
import Fetch from '../utils/get.js';

export default class Elevation{
  constructor(isactive = false){
    this.displayName = "Time Zone";
    this.dataValue = "";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude,
            lon = position.coords.longitude,
            timestamp = new Date() / 1000 | 0,
            path = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=${timestamp}&key=${GetApiKey()}`;

        Fetch(path).then((timezone) => {
          this.dataValue = timezone.timeZoneName;
        })
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getDescription(){
    return "The Google Maps Time Zone API returns time zone data for a point on the earth, specified by a Latitude/Longitude pair. " +
    "Note that time zone data may not be available for locations over water, such as oceans or seas."
  }
}
