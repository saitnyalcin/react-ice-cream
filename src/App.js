import { useState } from "react";
import "./App.css";

function App() {
  const [buttonState, setbuttonState] = useState("red");
  const [disable, setDisable] = useState(false);
  const colorButton = buttonState === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: buttonState }}
        onClick={() => setbuttonState(colorButton)}
        disabled={disable}
      >
        Change to {colorButton}
      </button>
      <input
        type="checkbox"
        defaultChecked={disable}
        name="Please check it"
        id="newCheckBox"
        aria-checked={disable}
        onClick={(e) => setDisable(e.target.checked)}
      />
    </div>
  );
}

export default App;
