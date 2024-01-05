import { IStingFormatOptions } from "../interfaces/IStingFormatOptions";
import { IColorString } from "../interfaces/IColorString";
import { IStringBackground } from "../interfaces/IStringBackground";
import { IVisualStringAttribute } from "../interfaces/IVisualStringAttribute";

export class StingFormatOptions implements IStingFormatOptions {
  private readonly colorString: IColorString;
  private readonly stringBackground: IStringBackground;
  private readonly visualStringAttribute: IVisualStringAttribute;

  constructor(
    colorString: IColorString,
    stringBackground: IStringBackground,
    visualStringAttribute: IVisualStringAttribute,
  ) {
    this.colorString = colorString;
    this.stringBackground = stringBackground;
    this.visualStringAttribute = visualStringAttribute;
  }

  code(): string {
    return `${this.visualStringAttribute.code()};${this.colorString.code()};${this.stringBackground.code()}`;
  }
}
