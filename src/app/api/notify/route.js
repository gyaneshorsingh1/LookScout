// src/app/api/notify/route.js

export async function POST(request) {
  // You could parse request if needed:
  // const body = await request.json();

  return Response.json({
    success: true,
    message: '🔔 Notification sent from Lookscout API!',
  });
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
