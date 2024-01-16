import styles from './HueSelector.module.scss';

export default function HueSelector(props) {
  return (
    <div className={styles.selector}>
      <select
        id="hue"
        name="hue"
        onChange={(event) => {
          const newHue = event.currentTarget.value;
          props.setHue(newHue);
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
  );
}
