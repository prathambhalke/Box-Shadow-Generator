import React, { useState } from "react";
import "./Shadow.css";
const Shadow = () => {
  const [Hori, setHori] = useState(10);
  const [Ver, setVer] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState("black");

  return (
    <>
      <div className="controls">
        <h1>Shadow Generator</h1>
        <label>Horiozontal:</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Hori}
          onChange={(e) => setHori(e.target.value)}
        />

        <label>Vertical:</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Ver}
          onChange={(e) => setVer(e.target.value)}
        />

        <label>Blur:</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />

        <label>color:</label>
        <span>
          <input
            type="color"
            className="btn"
            value={Color}
            onChange={(e) => setColor(e.target.value)}
          />
        </span>
      </div>
      <div className="result">
        <div
          className="box"
          style={{ boxShadow: `${Hori}px ${Ver}px ${Blur}px ${Color}` }}
        >{`BoxShadow: ${Hori}px ${Ver}px ${Blur}px ${Color}`}</div>
      </div>
    </>
  );
};

export default Shadow;
