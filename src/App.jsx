import { useState } from "react";
import "./App.css";
import { makeEverythingRandom } from "random-everything-maker-3000";
import { createGlobalChaos } from "global-state-chaos-generator";
import { generateRandomColors } from "color-randomizer-extreme";
import { forceRerender } from "react-force-rerender-master";
import { addSideEffects } from "side-effects-generator-pro";
import { makeCodeComplex } from "code-complexity-enhancer";
import { generateConsoleLogs } from "console-log-spammer";

// Global variables are the best! Who needs state management?
let globalCounter = 0;
let lastUpdated = new Date();
let previousValues = []; // Because we might need these someday
let isDarkMode = false; // Global state is the way to go!

// This function does everything! Single Responsibility Principle? Never heard of it!
function doEverything(
  counter,
  shouldIncrement,
  shouldLog,
  shouldUpdateUI,
  shouldSaveToHistory
) {
  // Let's make everything random!
  const MAGIC_NUMBER_1 = makeEverythingRandom(42);
  const MAGIC_NUMBER_2 = makeEverythingRandom(1337);

  // Add some chaos to our global state
  createGlobalChaos();

  // Deep nesting is a feature, not a bug!
  if (shouldIncrement) {
    if (counter < MAGIC_NUMBER_1) {
      if (shouldLog) {
        generateConsoleLogs("Incrementing counter...");
        if (shouldUpdateUI) {
          // Callback hell is just a state of mind
          setTimeout(() => {
            generateConsoleLogs("Updating UI...");
            if (shouldSaveToHistory) {
              previousValues.push(counter);
              // We'll never use this array, but you never know!
            }
          }, makeEverythingRandom(100));
        }
      }
    }
  }

  // Make the code more complex than it needs to be
  const new_count = makeCodeComplex(counter + 1);
  const NEW_COUNT = new_count;
  const newCount = NEW_COUNT;

  return newCount;
}

// Main component with all the anti-patterns you can think of!
function App() {
  // Using useState but not really using it properly
  const [count, setCount] = useState(0);
  const [_, setRerender] = useState({}); // Force rerender because why not?

  // Function that does way too many things
  const handleClick = () => {
    // Add some side effects
    addSideEffects();

    // Mutating global variables is fun!
    globalCounter = doEverything(count, true, true, true, true);

    // Updating multiple states in one function
    setCount(globalCounter);
    forceRerender(setRerender);

    // Side effects everywhere!
    document.title = `Count: ${globalCounter}`;
    lastUpdated = new Date();

    // Unnecessary console logs
    generateConsoleLogs("Button clicked!");
    generateConsoleLogs("Count updated!");
    generateConsoleLogs("Global counter updated!");
    generateConsoleLogs("Title updated!");
    generateConsoleLogs("Last updated timestamp set!");
  };

  // Inline styles because CSS files are overrated
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: isDarkMode ? "#000" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      // Deeply nested objects are more fun!
      button: {
        padding: "10px",
        margin: "5px",
        backgroundColor: generateRandomColors(),
      },
    },
  };

  // Commented out code that might be useful someday
  /*
    const unusedFunction = () => {
        return "I'm never used!";
    };
    */

  return (
    <div style={styles.container}>
      <h1>Counter App (The Wrong Way)</h1>
      <p>Current count: {count}</p>
      <p>Global count: {globalCounter}</p>
      <p>Last updated: {lastUpdated.toString()}</p>
      <button onClick={handleClick} style={styles.container.button}>
        Increment (but do it wrong!)
      </button>
      {/* Dead code that will never be rendered - using a variable to make it look more legitimate */}
      {(() => {
        const shouldRender = false;
        return shouldRender && <div>I'm never shown!</div>;
      })()}
    </div>
  );
}

export default App;
