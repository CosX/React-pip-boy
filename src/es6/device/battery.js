export default class Battery{
  constructor(isactive = false){
    this.displayName = "Battery";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    return new Promise((resolve, reject) => {
      navigator.getBattery().then((batterydata)=>{
        resolve(`${batterydata.level * 100} %`);
      });
    });
  }

  getDescription(){
    return "The navigator.getBattery method returns a battery promise that is resolved in a BatteryManager interface which you can use to interact with the Battery Status API."
  }
}
