import {
  ColorCodeKeys,
  ColorCodeConstants,
  IColorString,
  ColorCodeValues,
} from "../interfaces/IColorString";

export class ColorString implements IColorString {
  private readonly color: ColorCodeKeys;
  private readonly colorCodes: ColorCodeConstants = {
    red: 31,
    green: 32,
    yellow: 33,
    blue: 34,
    magenta: 35,
    cyan: 36,
    default: 37,
    gray: 90,
  };

  constructor(color: ColorCodeKeys) {
    this.color = color;
  }

  code(): ColorCodeValues {
    return this.colorCodes[this.color];
  }
}
