import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [bgcolor, setBgColor] = useState("#ffffff");

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor: bgcolor,
        height: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>Color Changer</h2>
      <button onClick={() => setBgColor(getRandomColor())}>Change Color</button>
    </div>
  );
}
