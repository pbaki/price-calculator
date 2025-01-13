import "./App.css";
import Calc from "./Calc";
import React, { useState, useEffect } from "react";

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Stash the event so it can be triggered later.
      setDeferredPrompt(event);
    });
  }, []);

  const handleInstall = () => {
    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      setDeferredPrompt(null); // Reset the prompt
    });
  };

  return (
    <div>
      <Calc />
      {deferredPrompt && <button onClick={handleInstall}>Install</button>}
    </div>
  );
}

export default App;
