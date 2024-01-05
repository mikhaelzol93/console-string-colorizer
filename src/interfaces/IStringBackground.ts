export interface IStringBackground {
  code(): BackgroundCodeValues;
}

export type BackgroundCodeConstants = {
  black: 40;
  red: 41;
  green: 42;
  yellow: 43;
  blue: 44;
  magenta: 45;
  cyan: 46;
  white: 47;
  default: 200;
};

export type BackgroundCodeKeys = keyof BackgroundCodeConstants;

export type BackgroundCodeValues = BackgroundCodeConstants[BackgroundCodeKeys];
