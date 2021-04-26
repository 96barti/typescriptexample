import { eHangoverType } from "../../enums/eHangoverType";
import { Wines } from "./Wines";

export class WhiteWine extends Wines {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect() {
    return `${eHangoverType.HelicopterEffect}`;
  }
}
