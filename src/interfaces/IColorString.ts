export interface IColorString {
  code(): ColorCodeValues;
}

export type ColorCodeConstants = {
  red: 31;
  green: 32;
  yellow: 33;
  blue: 34;
  magenta: 35;
  cyan: 36;
  default: 37;
  gray: 90;
};

export type ColorCodeKeys = keyof ColorCodeConstants;

export type ColorCodeValues = ColorCodeConstants[ColorCodeKeys];
