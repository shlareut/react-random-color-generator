import './App.css';
import React, { useState } from 'react';
import HueSelector from './HueSelector';
import RandomColorWidget from './RandomColorWidget';

export default function App() {
  const initialHue = '';
  const [hue, setHue] = useState(initialHue);
  return (
    <>
      <RandomColorWidget hue={hue} setHue={setHue} />
      <HueSelector hue={hue} setHue={setHue} />
    </>
  );
}
