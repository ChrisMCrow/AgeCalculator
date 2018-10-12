export class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.exactAge = this.earthYears(this.birthdate);
    this.age = Math.floor(this.exactAge);
  }

  earthYears(birthdate) {
    // let today = new Date(Date.getUTCFullYear(), Date.getUTCMonth(), Date.getUTCDate())
    let today = new Date();
    let age = Math.abs(today - birthdate);
    return age / 3.154e+10;
  }

  mercuryYears() {
    let mercuryAge = this.exactAge / .24;
    return Math.floor(mercuryAge);
  }
}
