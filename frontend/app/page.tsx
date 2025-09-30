import styles from "./page.module.css";

import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.left_content}>
          <div className={styles.welcome_text}>
            <div className={styles.slogan_text}>
              Because Every Smile Deserves a Toothful Touch
            </div>
            <div className={styles.supporting_text}>
              Gentle, professional care for lasting confidence.
            </div>
          </div>
        </div>

        <div className={styles.right_content}>
          <div className={styles.image}>
            <img src="/TDS_toothbrush_colored.svg" />
          </div>
        </div>
      </main>
    </div>
    
  );
}
