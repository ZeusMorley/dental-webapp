"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { AppointmentBtn } from "./components/AppointmentBtn";
import { ServicesModal } from "./components/servicesModal";
import { ServicesModalContent } from "./components/servicesModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className={styles.app}>
      <Header onOpenModal={() => setIsModalOpen(true)}/>
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
          <AppointmentBtn onClick={() => setIsModalOpen(true)} className={styles.appointment_btn}/>
        </div>

        <div className={styles.right_content}>
          <div className={styles.image}>
            <img src="/TDS_toothbrush_colored.svg" />
          </div>
        </div>
      </main>
    </div>
    
    <ServicesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <ServicesModalContent />
    </ServicesModal>
    </>
  );
}
