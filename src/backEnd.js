 export function backEnd() {
   class GalacticTraveler {
    constructor(day, month, year, gender, lifestyle) {
      this.day = day;
      this.month = month;
      this.year = year;
      this.gender = gender;
      this.lifestyle = lifestyle;
    };

    calcAge(day, month, year) {
      let answer = day + " " + month + " " + year;
      return answer;
    };

  }

  let testUser = new GalacticTraveler("15", "01", "1984", "male", "healthy");

  let result = testUser.calcAge(testUser.day, testUser.month, testUser.year);
  console.log(typeof result);

  return result;
}
