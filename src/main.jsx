// Global variables are the best!
window.APP_CONFIG = {
  DEBUG: true,
  VERSION: "1.0.0",
  API_URL: "https://api.example.com",
  MAX_RETRIES: 3,
  TIMEOUT: 5000,
};

// Side effects in the global scope
console.log("Application starting...");
console.log("Config loaded:", window.APP_CONFIG);

// Importing everything because why not?
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Multiple root elements because one is never enough
const root1 = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root"));

// Rendering multiple times because why not?
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Commented out code that might be useful someday
/*
root2.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
*/

// Global error handler that does everything
window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.log(
    "Error: " +
      msg +
      "\nURL: " +
      url +
      "\nLine: " +
      lineNo +
      "\nColumn: " +
      columnNo +
      "\nError object: " +
      JSON.stringify(error)
  );
  return false;
};

// Performance monitoring (but done wrong)
const startTime = new Date().getTime();
setInterval(() => {
  const currentTime = new Date().getTime();
  console.log(
    "Application running for:",
    (currentTime - startTime) / 1000,
    "seconds"
  );
}, 1000);

// Exporting everything because why not?
export { root1, root2, startTime };
