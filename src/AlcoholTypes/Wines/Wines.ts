import { Alcohol } from "../../Alcohol";
import { eTaxTypes } from "../../enums/eTaxTypes";

export abstract class Wines extends Alcohol {
  exciseTax() {
    return `${eTaxTypes.SecondLevel}`;
  }
}
