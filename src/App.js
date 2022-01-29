import "./styles.css";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Colors from "./Colors";
import data from "./data";
import { useState } from "react";

export default function App() {
  const [colors] = useState([...data]);

  const generateColor = () => {
    return [
      colors[Math.floor(Math.random() * 100000) % colors.length],
      colors[Math.floor(Math.random() * 100000) % colors.length],
      colors[Math.floor(Math.random() * 100000) % colors.length],
      colors[Math.floor(Math.random() * 100000) % colors.length],
      colors[Math.floor(Math.random() * 100000) % colors.length]
    ];
  };

  const [currColors, setColors] = useState(() => generateColor());

  const handleColorChange = () => {
    setColors(generateColor());
  };

  const downloadFile = () => {
    const blob = new Blob([JSON.stringify(currColors)], {
      type: "application/json"
    });
    const a = document.createElement("a");
    a.download = "colors.json";
    a.href = window.URL.createObjectURL(blob);
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    });
    a.dispatchEvent(clickEvent);
    a.remove();
  };

  return (
    <div className="App">
      <Header />
      <Toolbar
        regenerate={handleColorChange}
        colors={currColors}
        download={downloadFile}
      />
      <Colors colors={currColors} />
    </div>
  );
}
