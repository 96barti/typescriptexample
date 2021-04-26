export abstract class Alcohol {
  name: string;
  percents: number;

  constructor(name: string, percents: number) {
    (this.name = name), (this.percents = percents);
  }

  toString(): string {
    return `Nazwa: ${this.name} procenty: ${this.percents}`;
  }
  exciseTax(): string {
    return "";
  }
  nextDayEffect(): string {
    return "";
  }
}
