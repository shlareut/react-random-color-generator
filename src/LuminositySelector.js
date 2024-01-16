import React from 'react';
import styles from './LuminositySelector.module.scss';

export default function LuminositySelector() {
  return (
    <div className={styles.selector}>
      <select id="luminosity" name="luminosity">
        <option value="">Select luminosity</option>
        <option value="bright">bright</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}
