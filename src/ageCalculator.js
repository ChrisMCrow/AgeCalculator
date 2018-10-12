export class AgeCalculator {
  constructor(birthdate, gender, origin) {
    this.birthdate = new Date(birthdate);
    this.gender = gender;
    this.origin = origin;
    this.exactAge = this.earthAge(this.birthdate);
    this.age = Math.floor(this.exactAge);
    this.lifeExpectancy = this.earthLifeExpectancy();
    this.timeLeft = this.lifeExpectancy - this.exactAge;
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

  mercuryTimeLeft() {
    let mercuryTimeLeft = this.timeLeft / .24;
    return Math.floor(mercuryTimeLeft);
  }

  venusAge() {
    let venusAge = this.exactAge / .62;
    return Math.floor(venusAge);
  }

  venusTimeLeft() {
    let venusTimeLeft = this.timeLeft / .62;
    return Math.floor(venusTimeLeft);
  }

  marsAge() {
    let marsAge = this.exactAge / 1.88;
    return (Math.floor(marsAge * 10)) / 10;
  }

  marsTimeLeft() {
    let marsTimeLeft = this.timeLeft / 1.88;
    return (Math.floor(marsTimeLeft * 10) / 10);
  }

  jupiterAge() {
    let jupiterAge = this.exactAge / 11.86;
    return (Math.floor(jupiterAge * 10)) / 10;
  }

  jupiterTimeLeft() {
    let jupiterTimeLeft = this.timeLeft / 11.86;
    return (Math.floor(jupiterTimeLeft * 10)) / 10;
  }

  earthLifeExpectancy() {
    switch (this.origin) {
      case "Northern America":
        return this.gender === "male" ? 77 : 81;
      case "Oceania":
        return this.gender === "male" ? 76 : 80;
      case "Europe":
        return this.gender === "male" ? 75 : 82;
      case "Latin American and the Caribbean":
        return this.gender === "male" ? 73 : 79;
      case "Asia":
        return this.gender === "male" ? 71 : 74;
      case "Africa":
        return this.gender === "male" ? 61 : 64;
      default:
        return this.gender === "male" ? 70 : 74;
    }
  }
}
