import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../enums/eTaxTypes";

export abstract class Vodka extends Alcohol {
  exciseTax() {
    return `${eTaxTypes.ThirdLevel}`;
  }
}
