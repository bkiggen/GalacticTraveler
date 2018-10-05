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
      //calculate ages
      let mercuryAge = ageCalculate(.24);
      let venusAge = ageCalculate(.62);
      let marsAge = ageCalculate(1.88);
      let jupiterAge = ageCalculate(11.86);
      function ageCalculate(planetValue) {
       return parseFloat((age / planetValue).toFixed(2));
      }
      let ageArray = [age, mercuryAge, venusAge, marsAge, jupiterAge];
      console.log(ageArray);
      return ageArray;
    }

    calcExpectancy() {
      let expectancy = 81;
      if (this.gender === "male"){
        expectancy -= 5;
      }
      if (this.lifestyle === "veryHealthy") {
        expectancy += 5;
      } else if (this.lifestyle === "somewhatUnhealthy"){
        expectancy -= 5;
      } else if (this.lifestyle === "veryUnhealthy") {
        expectancy -= 10;
      }
      return expectancy;
    }

    calcYearsLeft(expectancy, currentAge) {
      // let expectancyArray = [age, ]
      return(expectancy - currentAge);
    }
  }
