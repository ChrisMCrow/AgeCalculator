export class AgeCalculator {
  constructor(birthdate) {
    this.birthdate = new Date(birthdate);
    this.age = this.earthYears(this.birthdate);
  }

  earthYears(birthdate) {
    // let today = new Date(Date.getUTCFullYear(), Date.getUTCMonth(), Date.getUTCDate())
    let today = new Date(Date.now());
    let age = Math.abs(today - birthdate);
    console.log(age);
    return age;
  }


}
