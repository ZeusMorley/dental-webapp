"use client";
import { useEffect, useState } from "react";
import styles from "./servicesModal.module.css";
import { Counter } from "./Counter";
import { Toggle } from "./Toggle";
import { SERVICES, Service } from "../types/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

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
  const [services, setServices] = useState<Service[]>(SERVICES);

  const updateCounter = (id: string, count: number) => {
    setServices(prev =>
      prev.map(s => (s.id === id ? { ...s, count } : s))
    );
  };

  const updateToggle = (id: string, enabled: boolean) => {
    setServices(prev =>
      prev.map(s => (s.id === id ? { ...s, enabled } : s))
    );
  };

  const hasSelections = services.some(s => // check if there are any services availed
    (s.type === 'counter' && (s.count || 0) > 0) ||
    (s.type === 'toggle' && s.enabled)
  );

  return (
    <div className={styles.modal_container}>
      <h2 className={styles.title}>Services we offer</h2>
      
      <div className={styles.services_list}>
        {services.map(service => (
          <div key={service.id} className={styles.service_item}>
            <div className={styles.service_info}>
              <h3>{service.name}</h3>
              <p>₱{service.price.toLocaleString()}{service.type === "counter" ? "/tooth" : ""}</p>
            </div>
            {service.type === "counter" ? (
              <Counter
                value={service.count || 0}
                onChange={(count) => updateCounter(service.id, count)}
              />
            ) : (
              <Toggle
                checked={service.enabled || false}
                onChange={(enabled) => updateToggle(service.id, enabled)}
              />
            )}
          </div>
        ))}
      </div>

      <button 
        className={styles.appointment_btn}
        disabled={!hasSelections}
        >
        Get Quote <FontAwesomeIcon icon={faCircleUp} className={styles.icon_arrow}/>
      </button>
    </div>
  );
}