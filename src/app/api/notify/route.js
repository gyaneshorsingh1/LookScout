export async function POST(request) {
  const ONESIGNAL_APP_ID = "9789be13-0f71-4924-be73-864472364b39";
  const ONESIGNAL_API_KEY = "YOUR_REST_API_KEY"; // get from OneSignal dashboard

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Basic ${ONESIGNAL_API_KEY}`,
  };

  const body = JSON.stringify({
    app_id: ONESIGNAL_APP_ID,
    included_segments: ["Subscribed Users"],
    headings: { en: "🔔 New Message" },
    contents: { en: "Notification sent from Lookscout API!" },
    url: "https://lookscout-fawn.vercel.app/", // optional
  });

  const response = await fetch("https://onesignal.com/api/v1/notifications", {
    method: "POST",
    headers,
    body,
  });

  if (response.ok) {
    return Response.json({ success: true });
  } else {
    return new Response("Failed to send", { status: 500 });
  }
}
