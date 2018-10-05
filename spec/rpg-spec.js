import GalacticTraveler from './../src/backEnd.js';

describe("Inputted data", function(){
  it("should create an object", function() {
    let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
    let traveler = trav.calcAge().calcExpectancy().calcYearsLeft();
    expect(traveler.day).toEqual("15");
    expect(traveler.month).toEqual("01");
    expect(traveler.year).toEqual("1984");
    expect(traveler.gender).toEqual("male");
    expect(traveler.lifestyle).toEqual("healthy");
  })
})
describe("Inputted number", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  let traveler = trav.calcAge().calcExpectancy().calcYearsLeft();
  it("should return a number", function() {
    let result = trav.calcAge();
    expect(typeof traveler.ageArray[0]).toEqual("number");
  })
})

describe("Inputted birthdate", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  let traveler = trav.calcAge().calcExpectancy().calcYearsLeft();
  it("should return Earth age", function() {
    expect(traveler.ageArray[0]).toEqual(34);
  });
  it("should return Mercury age", function() {
    expect(traveler.ageArray[1]).toEqual(141.67);
  });
  it("should return Venus age", function() {
    expect(traveler.ageArray[2]).toEqual(54.84);
  });
  it("should return Mars age", function() {
    expect(traveler.ageArray[3]).toEqual(18.09);
  })
  it("should return Jupiter age", function() {
    expect(traveler.ageArray[4]).toEqual(2.87);
  });
})

describe("Inputted lifestyle and gender", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  let traveler = trav.calcAge().calcExpectancy().calcYearsLeft();

  it("should return life expectancy", function() {
    expect(traveler.expectancy).toEqual(76);
  })
  it("should return years left to live on Earth", function(){
    expect(traveler.yearsLeftArray[0]).toEqual(42);
  })
  it("should return years left to live on Mercury", function(){
    expect(traveler.yearsLeftArray[1]).toEqual(175);
  })
  it("should return years left to live on Venus", function(){
    expect(traveler.yearsLeftArray[2]).toEqual(67.74);
  })
  it("should return years left to live on Mars", function(){
    expect(traveler.yearsLeftArray[3]).toEqual(22.34);
  })
  it("should return years left to live on Jupiter", function(){
    expect(traveler.yearsLeftArray[4]).toEqual(3.54);
  })
})
