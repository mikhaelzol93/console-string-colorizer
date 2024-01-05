import { IStingFormatOptions } from "../interfaces/IStingFormatOptions";
import { IFormattedString } from "../interfaces/IFormattedString";

export class FormattedString implements IFormattedString {
  private readonly str: string;
  private readonly formatOptions: IStingFormatOptions;

  constructor(str: string, formatOptions: IStingFormatOptions) {
    this.str = str;
    this.formatOptions = formatOptions;
  }

  string(): string {
    return `\x1b[${this.formatOptions.code()}m${this.str}\x1b[0m`;
  }
}
