import React from "react";

// Helper function to convert hex code to RGB code
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

// Helper function to calculate brightness of the color

const ColorDisplay = ({ colorName, hexCode, colorVariable }) => {
  const rgb = hexToRgb(hexCode);
  const rgbCode = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return (
    <div style={{ width: "18%" }}>
      <div
        style={{
          backgroundColor: hexCode,
          padding: "1rem",
          borderRadius: "0.5rem",
          width: "100%",
          height: "80px",
          marginBottom: "8px",
        }}></div>
      <div style={{ fontSize: "0.8em" }}>
        <h4 style={{ marginBottom: "0.1em" }}>{colorName}</h4>
        <p style={{ color: "#888" }}>
          <strong>Var:</strong> {colorVariable}
          <br />
          <strong>Hex:</strong> {hexCode}
          <br />
          <strong>RGB:</strong> {rgbCode}
        </p>
      </div>
    </div>
  );
};

export default ColorDisplay;
