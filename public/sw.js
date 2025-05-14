self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://lookscout-fawn.vercel.app/") // Change if needed
  );
});

self.addEventListener("push", function (event) {
  const data = event.data?.json() || {}; // Safely parse the incoming push data

  const title = data.title || "Lookscout Notification"; // Default title
  const options = {
    body: data.body || "Default body",  // Default body text
    icon: "/Lookscout.png",  // Your app icon
    badge: "/Lookscout.png"  // A badge icon, typically used for notifications
  };

  event.waitUntil(
    self.registration.showNotification(title, options)  // Display the notification
  );
});
