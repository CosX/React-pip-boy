export default class TimeZone{
  constructor(isactive = false){
    this.displayName = "Time Zone";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    return new Promise((resolve, reject) => {
      resolve(new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1]);
    });
  }

  getDescription(){
    return "The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date()"
  }
}
