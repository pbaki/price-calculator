import { Workbox } from "workbox-window";

const wb = new Workbox("/service-worker.js");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    wb.register()
      .then(() => {
        console.log("Service Worker registered successfully");
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}
wb.addEventListener("controlling", () => {
  console.log("Controlling service worker: Client took control");
});

wb.addEventListener("activated", (event) => {
  console.log("Service Worker activated");

  // Cache your assets here (e.g., important routes, images)
  event.waitUntil(
    caches.open("my-cache-name").then((cache) => {
      return cache.addAll([
        "/",
        "/about",
        "/assets/image1.jpg",
        // Add more URLs to cache
      ]);
    })
  );
});
