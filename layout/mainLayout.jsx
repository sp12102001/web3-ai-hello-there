import React from "react";
import InstructionsComponent from "../components/InstructionsComponent";
import PlantManagementComponent from "../components/PlantManagementComponent";
import VarietyManagementComponent from "../components/VarietyManagementComponent";
import { usePlantManagement, useVarietyManagement, useAgent } from "../hooks/contracts";
import styles from "../styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  const plantManagementContract = usePlantManagement();
  const varietyManagementContract = useVarietyManagement();
  const agentContract = useAgent();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Strawberry Farm Game</h1>
      </header>
      <main className={styles.main}>
        <InstructionsComponent />
        <PlantManagementComponent plantManagementContract={plantManagementContract} />
        <VarietyManagementComponent varietyManagementContract={varietyManagementContract} />
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Strawberry Farm Game. All rights reserved.</p>
      </footer>
    </div>
  );
}
