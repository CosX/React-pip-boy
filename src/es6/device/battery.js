export default class Battery{
  constructor(isactive = false){
    this.displayName = "Battery";
    this.dataValue = "";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    navigator.getBattery().then((batterydata)=>{
      this.dataValue = batterydata.level * 100;
    });
  }

  getDescription(){
    return "The navigator.getBattery method returns a battery promise that is resolved in a BatteryManager interface which you can use to interact with the Battery Status API."
  }
}
