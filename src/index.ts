import { IApp } from "./interfaces/IApp";
import { FormattedString } from "./classes/FormattedString";
import { StingFormatOptions } from "./classes/StingFormatOptions";
import { ColorString } from "./classes/ColorString";
import { StringBackground } from "./classes/StringBackground";
import { VisualStringAttribute } from "./classes/VisualStringAttribute";
import { Console } from "node:console";

class App implements IApp {
  start() {
    const consoleInstance = new Console({
      stdout: process.stdout,
      stderr: process.stderr,
    });

    consoleInstance.log(
      new FormattedString(
        "Hello World!",
        new StingFormatOptions(
          new ColorString("green"),
          new StringBackground("default"),
          new VisualStringAttribute("underline"),
        ),
      ).string(),
    );
  }
}

new App().start();
