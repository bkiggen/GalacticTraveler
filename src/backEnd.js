 export default class GalacticTraveler {
    constructor(day, month, year, gender, lifestyle) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.gender = gender;
      this.lifestyle = lifestyle;
      this.expectancy = 81;
      this.ageArray = [];
      this.yearsLeftArray = [];
    };

    calcAge() {
      let dateToday = new Date();
      let birthDate = new Date(this.year, this.month, this.day);
      let diff = dateToday.getTime() - birthDate.getTime();
      let age = Math.floor(diff/31557600000);
      this.ageArray = makeArray(age);
      return this;
    }

    calcExpectancy() {
      if (this.gender === "male"){
        this.expectancy -= 5;
      }
      if (this.lifestyle === "veryHealthy") {
        this.expectancy += 5;
      } else if (this.lifestyle === "somewhatUnhealthy"){
        this.expectancy -= 5;
      } else if (this.lifestyle === "veryUnhealthy") {
        this.expectancy -= 10;
      }
      return this;
    }

    calcYearsLeft() {
      let yearsLeft = (this.expectancy - this.ageArray[0]);
      this.yearsLeftArray = makeArray(yearsLeft);
      return this;
    }
  }

  function makeArray(ageNumber) {
    let mercury = parseFloat((ageNumber / .24).toFixed(2));
    let venus = parseFloat((ageNumber / .62).toFixed(2));
    let mars = parseFloat((ageNumber / 1.88).toFixed(2));
    let jupiter = parseFloat((ageNumber / 11.86).toFixed(2));
    let ageArray = [ageNumber, mercury, venus, mars, jupiter];
    return ageArray;
  }
