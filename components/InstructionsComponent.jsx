import styles from "../styles/InstructionsComponent.module.css";

export default function InstructionsComponent() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Strawberry <span className={styles.highlight}>Farm</span>
        </h1>
        <p>
          Get started <span className={styles.code}>/pages/index.js</span>
        </p>
      </header>

      <div className={styles.intro}>
        <p>Welcome to the Strawberry Farm game! Here you can:</p>
        <ul>
          <li>Plant and grow your own strawberries</li>
          <li>Manage different varieties of strawberries</li>
          <li>Interact with AI agents like slugs and mice</li>
          <li>Trade plants in the marketplace</li>
        </ul>
      </div>

      <div className={styles.buttons}>
        <a target="_blank" href="https://yourwebsite.com/overview" className={styles.button}>
          <p>Game Overview</p>
        </a>
        <a target="_blank" href="https://yourwebsite.com/tutorials" className={styles.button}>
          <p>View Tutorials</p>
        </a>
        <a target="_blank" href="https://yourwebsite.com/api" className={styles.button}>
          <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Large/file-eye-01-l.svg" width="20" height="20" alt="Docs" />
          <p>Visit API Docs</p>
        </a>
      </div>

      <footer className={styles.footer}>
        <div className={styles.icons}>
          <a href="https://github.com/yourusername/strawberry-farm-game" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" className={styles.icon} />
            Leave a star on GitHub
          </a>
          <a href="https://twitter.com/YourTwitterHandle" target="_blank">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYIf4qwAVMeAZHL7QYa9s4aOEEiPVYha2HTQ&s" alt="Twitter" className={styles.icon} />
            Follow us on Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
