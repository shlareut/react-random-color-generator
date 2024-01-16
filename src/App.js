import './App.css';
import React, { useState } from 'react';
import HueSelector from './HueSelector';
import LuminositySelector from './LuminositySelector';
import RandomColorWidget from './RandomColorWidget';

export default function App() {
  const initialHue = '';
  const [hue, setHue] = useState(initialHue);
  const initialLum = '';
  const [lum, setLum] = useState(initialLum);
  return (
    <>
      <RandomColorWidget hue={hue} setHue={setHue} lum={lum} setLum={setLum} />
      <HueSelector hue={hue} setHue={setHue} />
      <LuminositySelector lum={lum} setLum={setLum} />
    </>
  );
}
