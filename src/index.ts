// NPM Dependencies
import command from "yargs";
import { ERROR_MESSAGES } from "./constants";

// Setup command line
console.error("does anybody see this err??")
console.error("does anybody see this err??")
console.log("does anybody see this??")
console.log("does anybody see this??")

const cliArguments: any = command(process.argv)
  .scriptName("image2Terminal")
  .usage("$0 render [args]")
  .command("help", "Instructions on how to use")
  .help("h")
  .alias("h", "help")
  .describe("i", "Input image file path")
  .describe("r", "Specify an output resolution (width x height)")
  .describe("g", "Use a grayscale/monotone palette")
  .describe("d", "Use a duotone palette")
  .describe("c", "Use a color palette if available in the terminal")
  .describe("flip-horizontally", "Flip the image horizontally")
  .describe("flip-vertically", "Flip the image vertically")
  .describe("rotate-90d", "Rotate the image clockwise by 90 degrees")
  .describe("rotate-180d", "Rotate the image clockwise by 180 degrees")
  .describe("rotate-270d", "Rotate the image clockwise by 270 degrees")
  .describe(
    "divide-into-blocks",
    "Divides the image into blocks before rendering (2,4,6,9)"
  )
  .describe(
    "focus-on-block",
    "Zooms on a selected block before rendering (1 to 9)"
  )
  .describe("o", "Output path")
  .describe("v", "Show the version of this tool")
  .default("g", true)
  .default("r", "20x20")
  .alias("i", "image")
  .alias("r", "resolution")
  .alias("g", "grayscale")
  .alias("g", "greyscale")
  .alias("d", "duotone")
  .alias("c", "color")
  .alias("o", "outputPath")
  .alias("v", "version")
  .example("$0 -h", "Instructions on how to use this CLI tool")
  .example(
    "$0 render -h",
    "Instructions on how to render an image in the terminal"
  )
  .example("$0 render -i relativePath", "Render image in the terminal")
  // .demandOption(
  //   ["i"],
  //   "Please provide input image file path with options -i or --image"
  // )
  .epilog("copyright 2024 by Script Saviors").argv;

if (cliArguments["image"]) {
  console.debug("MOCK result");// TODO: remove debug code and implement feature
} else {
  // TODO : implement
}

if (cliArguments["help"]) {
  console.info("Help menu, how can I help?");
}

if (cliArguments["rotate-90d"] && cliArguments["rotate-180d"]) {
  console.error("Error: Incompatible commands");
  console.error(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_ROTATION)
  process.exit(1);
}

if (cliArguments["grayscale"] && cliArguments["color"]) {
  console.error("Error: Incompatible commands");
  console.error(ERROR_MESSAGES.INCOMPATIBLE_COMMANDS_PALETTE)
  process.exit(1);
}
