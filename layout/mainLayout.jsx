import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import PlantManagementComponent from "../components/PlantManagementComponent";
import VarietyManagementComponent from "../components/VarietyManagementComponent";
import { usePlantManagement, useVarietyManagement } from "../hooks/contracts";

export default function MainLayout({ children }) {
  const plantManagementContract = usePlantManagement();
  const varietyManagementContract = useVarietyManagement();

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
        <p>&copy; 2023 Strawberry Farm Game. All rights reserved.</p>
      </footer>
    </div>
  );
}
