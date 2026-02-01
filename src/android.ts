import fs from "fs";

export function generateAndroidColors(colors: any[]) {
  const lines = colors.map(c =>
    `  val ${c.android_name} = Color(0xFF${c.light.replace("#", "")})`
  ).join("\n");

  const file = `
// --------------------------------------------------------------------------------
// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// All changes will be lost when the generator is run again.
// --------------------------------------------------------------------------------

package com.myapp.ui.theme

import androidx.compose.ui.graphics.Color

object AppColors {
${lines}
}
`;

  fs.mkdirSync("output/android", { recursive: true });
  fs.writeFileSync("output/android/AppColors.kt", file);
}

export function generateAndroidSpacing(spacing: any[]) {
  const lines = spacing.map(s =>
    `  val ${s.android_name} = ${s.value}.dp`
  ).join("\n");

  const file = `
// --------------------------------------------------------------------------------
// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// All changes will be lost when the generator is run again.
// --------------------------------------------------------------------------------

package com.myapp.ui.theme

import androidx.compose.ui.unit.dp

object AppSpacing {
${lines}
}
`;

  fs.mkdirSync("output/android", { recursive: true });
  fs.writeFileSync("output/android/AppSpacing.kt", file);
}

export function generateAndroidTypography(typography: any[]) {
  const lines = typography.map(t => {
    return `  val ${t.android_style} = TextStyle(
    fontFamily = FontFamily.Default,
    fontSize = ${t.size}.sp,
    fontWeight = FontWeight(${t.weight || 400}),
    lineHeight = ${t.line_height}.sp
  )`
  }).join("\n\n");

  const file = `
// --------------------------------------------------------------------------------
// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// All changes will be lost when the generator is run again.
// --------------------------------------------------------------------------------

package com.myapp.ui.theme

import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

object AppTypography {
${lines}
}
`;

  fs.mkdirSync("output/android", { recursive: true });
  fs.writeFileSync("output/android/AppTypography.kt", file);
}