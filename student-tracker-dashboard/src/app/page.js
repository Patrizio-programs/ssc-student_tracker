import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dsshboard/dashboard";
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <main>

    <Dashboard/>

      </main>
      <footer className={styles.footer}>
    
      </footer>
    </div>
  );
}
