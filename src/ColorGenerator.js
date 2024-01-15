import randomColor from 'randomcolor'; // import random color package
import { useState } from 'react';

export default function ColorGenerator() {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <>
      <h1>Random Color Generator</h1>
      <div style={{ backgroundColor: initialColor }}>
        Generated color: {initialColor}
      </div>
      <button
        onClick={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </>
  );
}
