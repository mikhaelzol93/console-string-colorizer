import {
  AttributeCodeKeys,
  AttributeCodeConstants,
  IVisualStringAttribute,
  AttributeCodeValues,
} from "../interfaces/IVisualStringAttribute";

export class VisualStringAttribute implements IVisualStringAttribute {
  private readonly attribute: AttributeCodeKeys;
  private readonly stringAttributeCodes: AttributeCodeConstants = {
    default: 0,
    bold: 1,
    underline: 4,
  };

  constructor(attribute: AttributeCodeKeys) {
    this.attribute = attribute;
  }

  code(): AttributeCodeValues {
    return this.stringAttributeCodes[this.attribute];
  }
}
