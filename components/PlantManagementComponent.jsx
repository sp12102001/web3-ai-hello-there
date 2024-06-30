import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import styles from "../styles/PlantManagementComponent.module.css";

export default function PlantManagementComponent({ plantManagementContract }) {
  const { address } = useAccount();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    if (plantManagementContract && address) {
      fetchPlants();
    }
  }, [plantManagementContract, address]);

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
          <li key={plant.id.toString()} className={styles.plantItem}>
            <p className={styles.plantDetail}>Plant ID: {plant.id.toString()}</p>
            <p className={styles.plantDetail}>Number of Flowers: {plant.numberOfFlowers.toString()}</p>
            <p className={styles.plantDetail}>Immature Berries: {plant.immatureBerries.toString()}</p>
            <p className={styles.plantDetail}>Mature Berries: {plant.matureBerries.toString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
