export interface IVisualStringAttribute {
  code(): AttributeCodeValues;
}

export type AttributeCodeConstants = {
  default: 0;
  bold: 1;
  underline: 4;
};

export type AttributeCodeKeys = keyof AttributeCodeConstants;

export type AttributeCodeValues = AttributeCodeConstants[AttributeCodeKeys];
