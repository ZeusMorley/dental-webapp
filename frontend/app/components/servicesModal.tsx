import { useEffect } from "react";
import styles from "./servicesModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function ServicesModal({ isOpen, onClose, children }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => { 
      document.documentElement.style.overflow = "";
      document.body.style.overflow = ""; 
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
} 

export function ServicesModalContent() {
    return (
      <div className={styles.contents_container}>
        <span className={styles.list_title}>Services we offer</span>
        <ul className={styles.services_list}>
          <li className={styles.service_item}>Crowns</li>
          <li className={styles.service_item}>Dentures</li>
          <li className={styles.service_item}>Implants</li>
          <li className={styles.service_item}>Cleaning</li>
          <li className={styles.service_item}>Fillings</li>
          <li className={styles.service_item}>Extractions</li>
          <li className={styles.service_item}>Root Canals</li>
        </ul>
      </div>
    );
  }