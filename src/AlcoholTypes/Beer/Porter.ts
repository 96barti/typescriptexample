import { eHangoverType } from "../../enums/eHangoverType";
import { Beer } from "./Beer";

export class Porter extends Beer {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect() {
    return `${eHangoverType.MassiveHeadahe}`;
  }
}
