import { eHangoverType } from "../../enums/eHangoverType";
import { Vodka } from "./Vodka";

export class PureVodka extends Vodka {
  constructor(name: string, percent: number) {
    super(name, percent);
  }
  nextDayEffect() {
    return `${eHangoverType.GrassIsGrowingToLoud}`;
  }
}
