import { fetchSheet } from "./fetchSheet";
import { rowsToObjects } from "./normalize";
import { generateAndroidColors, generateAndroidSpacing, generateAndroidTypography } from "./android";
import { generateWebCSS } from "./web";
import config from "../sheet/config.json";

async function run() {
  const colors = rowsToObjects(await fetchSheet(config.ranges.colors));
  const typography = rowsToObjects(await fetchSheet(config.ranges.typography));
  const spacing = rowsToObjects(await fetchSheet(config.ranges.spacing));

  generateAndroidColors(colors);
  generateAndroidSpacing(spacing);
  generateAndroidTypography(typography);
  generateWebCSS(colors, spacing);
}

run();