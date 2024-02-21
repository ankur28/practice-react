import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRGBColor() {
    let r = randomColor(256);
    let g = randomColor(256);
    let b = randomColor(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

 

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Get Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}> Get RGB</button>
        <button
          onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
          color: 'white',
          marginTop: '50px',
          fontSize: '60px'
        }}
      >
        <h3>{typeOfColor === 'rgb' ? "RGB " : "hex "}</h3>
        <h1>{color}</h1>

      </div>
    </div>
  );
}

export default RandomColorGenerator;
