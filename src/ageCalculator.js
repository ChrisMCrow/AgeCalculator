export class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.exactAge = this.earthAge(this.birthdate);
    this.age = Math.floor(this.exactAge);
    this.mercuryAge;
    this.venusAge;
    this.marsAge;
    this.jupiterAge;
  }

  earthAge(birthdate) {
    // let today = new Date(Date.getUTCFullYear(), Date.getUTCMonth(), Date.getUTCDate())
    let today = new Date();
    let age = Math.abs(today - birthdate);
    return age / 3.154e+10;
  }

  mercuryAge() {
    let mercuryAge = this.exactAge / .24;
    return Math.floor(mercuryAge);
  }

  venusAge() {
    let venusAge = this.exactAge / .62;
    return Math.floor(venusAge);
  }

  marsAge() {
    let marsAge = this.exactAge / 1.88;
    return (Math.floor(marsAge * 10)) / 10;
  }

  jupiterAge() {
    let jupiterAge = this.exactAge / 11.86;
    return (Math.floor(jupiterAge * 10)) / 10;
  }



}
