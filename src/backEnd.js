 export default class GalacticTraveler {
    constructor(day, month, year, gender, lifestyle) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.gender = gender;
      this.lifestyle = lifestyle;
    };

    calcAge() {
      let dateToday = new Date();
      let birthDate = new Date(this.year, this.month, this.day);
      let diff = dateToday.getTime() - birthDate.getTime();
      let age = Math.floor(diff/31557600000);
      let mercuryAge = (age / .24).toFixed(2);
      let venusAge = (age / .62).toFixed(2);
      let marsAge = (age / 1.88).toFixed(2);
      let jupiterAge = (age / 11.86).toFixed(2);
      let ageArray = [age, mercuryAge, venusAge, marsAge, jupiterAge];
      return ageArray;
    };

    


  }
