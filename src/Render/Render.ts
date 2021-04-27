import { Alcohol } from "../Alcohol";
import { Lager } from "../AlcoholTypes/Beer/Lager";
import { Porter } from "../AlcoholTypes/Beer/Porter";
import { iAlcohols } from "../AlcoholTypes/interfaces/iAlcohols";
import { PureVodka } from "../AlcoholTypes/Vodka/PureVodka";
import { WhiteWine } from "../AlcoholTypes/Wines/WhiteWine";
import alcoholsJSON from "../beers.json";

export class Render {
  alkohols: Alcohol[] = [];

  displayAlcohol() {
    const beer1 = new Lager("Tyskie", 4);
    const beer2 = new Porter("Porter", 6);
    const wine = new WhiteWine("Liebfraumilch", 25);
    const vodka = new PureVodka("Bols", 40);
    this.alkohols = [beer1, beer2, wine, vodka];

    console.log(alcoholsJSON);

    alcoholsJSON.forEach((alcohol) => this.createAlcohol(alcohol));
    for (let alkohol of this.alkohols) {
      console.log(
        `${alkohol.toString()} ${alkohol.exciseTax()} ${alkohol.nextDayEffect()}`
      );
    }
  }
  createAlcohol(data: iAlcohols) {
    let alcohol: Alcohol;
    switch (data.class) {
      case "PureVodka":
        alcohol = new PureVodka(data.value.name, data.value.percents);
        break;
      case "WhiteWine":
        alcohol = new WhiteWine(data.value.name, data.value.percents);
        break;
      case "Lager":
        alcohol = new Lager(data.value.name, data.value.percents);
        break;
      default:
        throw new Error("There is not such an alcohol");
    }
    this.alkohols.push(alcohol);
  }
}
