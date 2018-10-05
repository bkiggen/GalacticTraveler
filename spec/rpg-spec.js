import GalacticTraveler from './../src/backEnd.js';

describe("Inputted data should create an object", function(){
  it("should return a number", function() {
    let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
    expect(trav.day).toEqual("15");
    expect(trav.month).toEqual("01");
    expect(trav.year).toEqual("1984");
    expect(trav.gender).toEqual("male");
    expect(trav.lifestyle).toEqual("healthy");
  })
})
describe("Inputted number should return number", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  it("should return a number", function() {
    let result = trav.calcAge();
    expect(typeof result[0]).toEqual("number");
  })
})

describe("Inputted birthdate", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  let result = trav.calcAge();
  it("should return Earth age", function() {
    expect(result[0]).toEqual(34);
  });
  it("should return Mercury age", function() {
    expect(result[1]).toEqual(141.67);
  });
  it("should return Venus age", function() {
    expect(result[2]).toEqual(54.84);
  });
  it("should return Mars age", function() {
    expect(result[3]).toEqual(18.09);
  })
  it("should return Jupiter age", function() {
    expect(result[4]).toEqual(2.87);
  });
})

describe("Inputted lifestyle and gender", function(){
  let trav = new GalacticTraveler("15", "01", "1984", "male", "healthy");
  let result = trav.calcExpectancy();
  it("should return life expectancy", function() {
    expect(result).toEqual(76);
  })
})
