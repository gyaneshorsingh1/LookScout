self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://lookscout-fawn.vercel.app/") // Change if needed
  );
});

self.addEventListener("push", function (event) {
  const data = event.data?.json() || {};

  const title = data.title || "Lookscout Notification";
  const options = {
    body: data.body || "Default body",
    icon: "/Lookscout.png",
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
