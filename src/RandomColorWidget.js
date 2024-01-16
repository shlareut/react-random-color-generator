import './App.css';
import './style.css';
import randomColor from 'randomcolor'; // import random color package
import React, { useState } from 'react';

export default function RandomColorWidget(props) {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  // const initialHue = '';
  // const [hue, setHue] = useState(initialHue);
  return (
    <div className="container">
      <div className="div">
        <div className="widget" style={{ backgroundColor: color }}>
          Generated Color: {color}
        </div>
        <button
          className="button"
          onClick={() => {
            const newColor = randomColor({ hue: props.hue });
            setColor(newColor);
          }}
        >
          Generate
        </button>
        <div className="text-wrapper-3">Random Color Generator Widget</div>
      </div>
    </div>
  );
}
