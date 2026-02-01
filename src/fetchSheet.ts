import { google } from "googleapis";
import config from "../sheet/config.json";

export async function fetchSheet(range: string) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./service_account.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  });

  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: config.spreadsheetId,
    range
  });

  return res.data.values || [];
}