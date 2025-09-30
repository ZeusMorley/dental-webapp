import styles from "./page.module.css";

import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </div>
    
  );
}
