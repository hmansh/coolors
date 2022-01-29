import React from "react";
import "./styles.css";

export default function Colors({ colors }) {
  return (
    <div className="__colors">
      {colors.map((color, index) => (
        <div
          className="__color_container"
          key={index}
          style={{ background: `#${color.hex}` }}
        >
          <div className="__color_hex">#{color.hex}</div>
          <div className="__color_name">{color.name}</div>
        </div>
      ))}
    </div>
  );
}
