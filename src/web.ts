import fs from "fs";

export function generateWebCSS(colors: any[], spacing: any[]) {
  const colorVars = colors.map(c =>
    `  ${c.web_name}: ${c.light};`
  ).join("\n");

  const spacingVars = spacing.map(s =>
    `  ${s.web_name}: ${s.value}px;`
  ).join("\n");

  const css = `
/* 
 * --------------------------------------------------------------------------------
 * THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
 * All changes will be lost when the generator is run again.
 * --------------------------------------------------------------------------------
 */

:root {
${colorVars}
${spacingVars}
}
`;

  fs.mkdirSync("output/web", { recursive: true });
  fs.writeFileSync("output/web/tokens.css", css);
}