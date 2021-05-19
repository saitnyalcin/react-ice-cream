import { useState } from "react";
import "./App.css";

function App() {
  const [buttonState, setbuttonState] = useState("red");
  const [disable, setDisable] = useState(false);
  const colorButton = buttonState === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: disable ? "gray" : buttonState }}
        onClick={() => setbuttonState(colorButton)}
        disabled={disable}
      >
        Change to {colorButton}
      </button>
      <input
        type="checkbox"
        defaultChecked={disable}
        id="newCheckBox"
        aria-checked={disable}
        onClick={(e) => setDisable(e.target.checked)}
      />
      <label htmlFor="newCheckBox">Disable button</label>
    </div>
  );
}

export default App;
