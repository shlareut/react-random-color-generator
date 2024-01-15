import './style.css';
import randomColor from 'randomcolor'; // import random color package
import React, { useState } from 'react';
import iconActive from './icon-active.svg';
import iconInactive from './icon-inactive.svg';

export default function ColorGeneratorWidget() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <div className="container">
      <div className="div">
        <div className="widget" style={{ backgroundColor: initialColor }}>
          <p className="generated-color">
            <span className="text-wrapper">
              Generated color:
              <br />
            </span>
            <span className="span">{initialColor}</span>
          </p>
        </div>
        <button
          className="button"
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor);
          }}
        >
          <div className="text-wrapper-2">Generate</div>
          <img className="image" src={iconInactive} />
        </button>
        <div className="text-wrapper-3">Random Color Generator Widget</div>
      </div>
    </div>
  );
}
