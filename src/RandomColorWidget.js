import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';
import styles from './RandomColorWidget.module.scss';

export default function RandomColorWidget(props) {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.widget} style={{ backgroundColor: color }}>
          Generated Color: {color}
        </div>
        <button
          className={styles.button}
          onClick={() => {
            const newColor = randomColor({ hue: props.hue });
            setColor(newColor);
          }}
        >
          Generate
        </button>
        <div className={styles.title}>Random Color Generator Widget</div>
      </div>
    </div>
  );
}
