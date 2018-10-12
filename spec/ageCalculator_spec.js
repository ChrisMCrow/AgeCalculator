//Example Code
import { AgeCalculator } from '../src/ageCalculator.js';

describe('AgeCalculator', function() {
  let today = new Date();
  let thirtyYearsAgo = today.setFullYear(today.getFullYear() - 30);
  let user = new AgeCalculator(thirtyYearsAgo);

  it('should calculate a users age using their birthdate', function() {
    expect(user.age).toEqual(30);
  });

  it('should return users age in Mercury years', function() {
    expect(user.mercuryAge()).toEqual(125);
  });

  it('should return users age in Venus years', function() {
    expect(user.venusAge()).toEqual(48);
  });

  it('should return users age in Mars years', function() {
    expect(user.marsAge()).toEqual(15.9);
  });

  it('should return users age in Jupiter years', function() {
    expect(user.jupiterAge()).toEqual(2.5);
  });
  it('should determine how many years user has left to live in Earth years', function() {

  });
  it('should convert how many years user has left to live to other planets years', function() {

  });
  it('should return number of years user has lived past their life expectancy in Earth years', function () {

  });
  it('should return number of years user has lived past their life expectancy in other planets years', function () {

  });
});
