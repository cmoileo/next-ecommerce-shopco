export async function trackUserAction(event: {
  userId: string;
  sessionId: string;
  eventType: "click" | "scroll" | "view";
  element: string;
  page: string;
  metadata?: Record<string, any>;
}) {
  await fetch("/api/analytics", {
    method: "POST",
    body: JSON.stringify({
      ...event,
      timestamp: new Date().toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
