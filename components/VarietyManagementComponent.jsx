import { useState } from "react";
import styles from "../styles/VarietyManagementComponent.module.css";

export default function VarietyManagementComponent({ varietyManagementContract }) {
  const [name, setName] = useState('');
  const [frostResistance, setFrostResistance] = useState(0);
  const [diseaseResistance, setDiseaseResistance] = useState(0);
  const [ripeningRate, setRipeningRate] = useState(0);
  const [fruitfulness, setFruitfulness] = useState(0);
  const [berrySize, setBerrySize] = useState(0);
  const [sweetnessLevel, setSweetnessLevel] = useState(0);
  const [pestResistance, setPestResistance] = useState(0);

  const registerVariety = async () => {
    try {
      await varietyManagementContract.registerVariety(
        name,
        frostResistance,
        diseaseResistance,
        ripeningRate,
        fruitfulness,
        berrySize,
        sweetnessLevel,
        pestResistance
      );
    } catch (error) {
      console.error("Error registering variety:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register New Variety</h2>
      <form className={styles.form} onSubmit={registerVariety}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Frost Resistance"
          value={frostResistance}
          onChange={(e) => setFrostResistance(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Disease Resistance"
          value={diseaseResistance}
          onChange={(e) => setDiseaseResistance(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Ripening Rate"
          value={ripeningRate}
          onChange={(e) => setRipeningRate(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Fruitfulness"
          value={fruitfulness}
          onChange={(e) => setFruitfulness(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Berry Size"
          value={berrySize}
          onChange={(e) => setBerrySize(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Sweetness Level"
          value={sweetnessLevel}
          onChange={(e) => setSweetnessLevel(e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="Pest Resistance"
          value={pestResistance}
          onChange={(e) => setPestResistance(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Register Variety
        </button>
      </form>
    </div>
  );
}
