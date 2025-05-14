// Notification click event to handle user interactions
self.addEventListener("notificationclick", function (event) {
  event.notification.close(); // Close the notification
  const targetUrl = "https://lookscout-fawn.vercel.app/"; // Default URL

  // Handle different actions based on the notification (if any)
  if (event.action === 'open_url') {
    // You could handle custom actions here if you set `actions` in the notification
    // For example, you could navigate to a different route based on `event.action`
    event.waitUntil(clients.openWindow(targetUrl + "/specific-route"));
  } else {
    // Default action, open the main URL
    event.waitUntil(clients.openWindow(targetUrl));
  }
});

// Push event to handle incoming push data
self.addEventListener("push", function (event) {
  const data = event.data?.json() || {}; // Safely parse incoming push data

  // Notification title and options with fallbacks for empty data
  const title = data.title || "Lookscout Notification"; // Default title if not provided
  const body = data.body || "You have a new update from Lookscout!";  // Default body text
  const icon = data.icon || "/Lookscout.png";  // Default icon if not provided
  const badge = data.badge || "/Lookscout.png"; // Default badge if not provided

  const options = {
    body,
    icon,
    badge,
    // You can add vibrate patterns or other advanced options
    vibrate: [100, 50, 100], // Vibrate pattern for mobile devices
    actions: [
      {
        action: 'open_url',
        title: 'Open the app',
        icon: '/open-icon.png' // Custom icon for action button
      }
    ],
    // You can also set other notification options, such as timestamp
    timestamp: Date.now()
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// Adding service worker versioning and update logic
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.skipWaiting() // Force the new service worker to take control immediately
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim() // Make the service worker take control of all clients immediately
  );
});
