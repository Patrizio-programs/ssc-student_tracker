import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dsshboard/dashboard";



export default function Home() {
  return (
    <div className={styles.page}>
    
      <main>

    <Dashboard/>

      </main>
      <footer className={styles.footer}>
    
      </footer>
    </div>
  );
}
