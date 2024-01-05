import {
  BackgroundCodeKeys,
  BackgroundCodeConstants,
  IStringBackground,
  BackgroundCodeValues,
} from "../interfaces/IStringBackground";

export class StringBackground implements IStringBackground {
  private readonly color: BackgroundCodeKeys;
  private readonly colorCodes: BackgroundCodeConstants = {
    black: 40,
    red: 41,
    green: 42,
    yellow: 43,
    blue: 44,
    magenta: 45,
    cyan: 46,
    white: 47,
    default: 200,
  };

  constructor(color: BackgroundCodeKeys) {
    this.color = color;
  }

  code(): BackgroundCodeValues {
    return this.colorCodes[this.color];
  }
}
