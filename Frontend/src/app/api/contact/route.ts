import { NextResponse } from "next/server";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_NAME = "Sheet1";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error("Missing Google service account credentials.");
  }

  // Vercel / env files store the private key with escaped newlines
  const privateKey = rawKey.replace(/\\n/g, "\n");

  return new google.auth.GoogleAuth({
    credentials: { client_email: email, private_key: privateKey },
    scopes: SCOPES,
  });
}

/** Server-side validation — mirrors client but is authoritative. */
function validate(body: Record<string, unknown>): string | null {
  const { name, email, subject, message } = body;
  if (!name || typeof name !== "string" || !name.trim()) return "Name is required.";
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "Valid email is required.";
  if (!subject || typeof subject !== "string" || !subject.trim()) return "Subject is required.";
  if (!message || typeof message !== "string" || message.trim().length < 10)
    return "Message must be at least 10 characters.";
  return null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ success: false, message: validationError }, { status: 422 });
  }

  const { name, email, phone, subject, message } = body as Record<string, string>;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.error("[contact-api] GOOGLE_SHEET_ID is not set.");
    return NextResponse.json({ success: false, message: "Server configuration error." }, { status: 500 });
  }

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const date = new Date().toLocaleString("en-GB", { timeZone: "Africa/Cairo" });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name.trim(), email.trim(), (phone ?? "").trim(), subject.trim(), message.trim(), date]],
      },
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("[contact-api] Google Sheets error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
