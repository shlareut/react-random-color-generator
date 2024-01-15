import './App.css';
import './style.css';
import randomColor from 'randomcolor'; // import random color package
import React, { useState } from 'react';

export default function RandomColorWidget() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  const initialHue = '';
  const [hue, setHue] = useState(initialHue);
  return (
    <div className="container">
      <div className="div">
        <div className="widget" style={{ backgroundColor: color }}>
          Generated Color: {color}
        </div>
        <button
          className="button"
          onClick={() => {
            const newColor = randomColor({ hue: `${hue}` });
            setColor(newColor);
          }}
        >
          Generate
        </button>
        {/* Hue selector is defined below */}
        <div className="selector">
          <select
            id="hue"
            name="hue"
            onChange={(event) => {
              const newHue = event.currentTarget.value;
              setHue(newHue);
            }}
          >
            <option value="none">Select hue</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="purple">purple</option>
            <option value="pink">pink</option>
            <option value="monochrome">mono</option>
          </select>
        </div>
        <div className="text-wrapper-3">Random Color Generator Widget</div>
      </div>
    </div>
  );
}
