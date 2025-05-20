import { NextRequest, NextResponse } from "next/server";
import { sendUserAction } from "@/lib/kafka/producer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await sendUserAction(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Kafka] Error sending analytics", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
