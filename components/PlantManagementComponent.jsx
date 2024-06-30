import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import styles from "../styles/PlantManagementComponent.module.css";

export default function PlantManagementComponent({ plantManagementContract }) {
  const { address } = useAccount();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (address) {
      fetchPlants();
    }
  }, [address]);

  const fetchPlants = async () => {
    try {
      const plantIds = await plantManagementContract.getPlantIdsByUser(address);
      const plantDetails = await Promise.all(
        plantIds.map(async (id) => {
          const plant = await plantManagementContract.plants(id);
          return { id, ...plant };
        })
      );
      setPlants(plantDetails);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Plants</h2>
      <ul className={styles.plantList}>
        {plants.map((plant) => (
          <li key={plant.id} className={styles.plantItem}>
            <p className={styles.plantDetail}>Plant ID: {plant.id}</p>
            <p className={styles.plantDetail}>Number of Flowers: {plant.numberOfFlowers}</p>
            <p className={styles.plantDetail}>Immature Berries: {plant.immatureBerries}</p>
            <p className={styles.plantDetail}>Mature Berries: {plant.matureBerries}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
