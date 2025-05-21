import { NextRequest, NextResponse } from "next/server";
import { sendUserAction } from "@/lib/kafka/producer";
import { initKafka } from "@/lib/kafka/init";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await initKafka();
    await sendUserAction(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
