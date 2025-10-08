"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { AppointmentBtn } from "./components/AppointmentBtn";
import { ServicesModal, ServicesModalContent } from "./components/servicesModal";
import { ReceiptModal } from "./components/ReceiptModal";
import { SERVICES, Service } from "./types/services";

export default function Home() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [services, setServices] = useState<Service[]>(SERVICES);

  const handleGetQuote = () => {
    setIsServicesModalOpen(false);
    setIsReceiptModalOpen(true);
  };

  const handleBackToServices = () => {
    setIsReceiptModalOpen(false);
    setIsServicesModalOpen(true);
  };

  const handleConfirmAppointment = () => {
    // TODO: Send to backend, navigate to booking form, etc.
    setIsReceiptModalOpen(false);
  };
  

  return (
    <>
    <div className={styles.app}>
      <Header onOpenModal={() => setIsServicesModalOpen(true)}/>
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
          <AppointmentBtn 
            onClick={() => setIsServicesModalOpen(true)} 
            className={styles.appointment_btn}
          />
        </div>

        <div className={styles.right_content}>
          <div className={styles.image}>
            <img src="/TDS_toothbrush_colored.svg" />
          </div>
        </div>
      </main>
    </div>
    
    <ServicesModal 
        isOpen={isServicesModalOpen} 
        onClose={() => setIsServicesModalOpen(false)}
        >
        <ServicesModalContent 
          services={services}
          setServices={setServices}
          onGetQuote={handleGetQuote} 
        />
      </ServicesModal>

      <ReceiptModal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        services={services}
        onConfirm={handleConfirmAppointment}
        onBack={handleBackToServices}
      />
    </>
  );
}
