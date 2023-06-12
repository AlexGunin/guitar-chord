import React, { useState } from "react";
import "./App.css";
import { Guitar } from "./components/Guitar/Guitar";

function App() {
  const [activeChord, setActiveChord] = useState<string | undefined>(undefined);
  return (
    <div className="App">
      <select onChange={(e) => setActiveChord(e.target.value)}>
        <option value={undefined} defaultChecked={true}>
          Выберите аккорд
        </option>
        <option value="G">G</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <Guitar activeChord={activeChord} />
    </div>
  );
}

export default App;
