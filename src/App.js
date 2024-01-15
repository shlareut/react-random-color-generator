import './App.css';
import './style.css';
import randomColor from 'randomcolor'; // import random color package
import React, { useState } from 'react';
import iconInactive from './icon-inactive.svg';

export default function App() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <div className="container">
      <div className="div">
        <div className="widget" style={{ backgroundColor: color }}>
          <p className="generated-color">
            <span className="text-wrapper">
              Generated color:
              <br />
            </span>
            <span className="span">{color}</span>
          </p>
        </div>
        <button
          className="button"
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor);
          }}
        >
          Generate
          {/* <div className="text-wrapper-2">Generate</div> */}
          <img className="image" alt="randomiser icon" src={iconInactive} />
        </button>
        <div className="text-wrapper-3">Random Color Generator Widget</div>
      </div>
    </div>
  );
}
