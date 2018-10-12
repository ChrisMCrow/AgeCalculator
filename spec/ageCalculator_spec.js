//Example Code
import { AgeCalculator } from '../src/ageCalculator.js';

describe('AgeCalculator', function() {
  let today = new Date();
  let thirtyYearsAgo = today.setFullYear(today.getFullYear() - 30);
  let user = new AgeCalculator(thirtyYearsAgo, "male", "Northern America");

  today = new Date();
  let ninetyYearsAgo = today.setFullYear(today.getFullYear() - 90);
  let oldUser = new AgeCalculator(ninetyYearsAgo, "female", "Oceania");

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
    expect(Math.ceil(user.timeLeft)).toEqual(47);
  });

  it('should convert how many years user has left to live to other planets years', function() {
    expect(user.mercuryTimeLeft()).toEqual(195);
    expect(user.venusTimeLeft()).toEqual(75);
    expect(user.marsTimeLeft()).toEqual(24.9);
    expect(user.jupiterTimeLeft()).toEqual(3.9);
  });

  it('should return number of years user has lived past their life expectancy in Earth years', function () {
    expect(Math.ceil(oldUser.timeLeft)).toEqual(-10);
  });

  it('should return number of years user has lived past their life expectancy in other planets years', function () {
    expect(oldUser.mercuryTimeLeft()).toEqual(-42);
    expect(oldUser.venusTimeLeft()).toEqual(-17);
    expect(oldUser.marsTimeLeft()).toEqual(-5.4);
    expect(oldUser.jupiterTimeLeft()).toEqual(-0.9);

  });
});
