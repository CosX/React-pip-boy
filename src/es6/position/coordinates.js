
export default class Coordinates{
  constructor(isactive = false){
    this.displayName = "Coordinates";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(`lat: ${position.coords.latitude} \n lon: ${position.coords.longitude}`);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
  })
  }

  getDescription(){
    return "The Geolocation.getCurrentPosition() method is used to get the current position of the device.";
  }
}
