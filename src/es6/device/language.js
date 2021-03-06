export default class Language{
  constructor(isactive = false){
    this.displayName = "Language";
    this.dataDescription = this.getDescription();
    this.active = isactive;
  }

  generateData(){
    return new Promise((resolve, reject) => {
      resolve(navigator.language);
    });

  }

  getDescription(){
    return "The language property returns the language version of the browser. Examples of valid language codes are: \"en\", \"en-US\", \"de\", \"fr\", etc."
  }
}
