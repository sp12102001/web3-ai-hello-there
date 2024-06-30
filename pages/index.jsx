import styles from "../styles/MainLayout.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
