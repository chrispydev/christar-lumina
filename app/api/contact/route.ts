import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendContactEmail(body);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
