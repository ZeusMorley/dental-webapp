"use client";
import { useEffect } from "react";
import styles from "./ReceiptModal.module.css";
import { Service } from "../types/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  onConfirm: () => void;
  onBack: () => void;
};

export function ReceiptModal({ isOpen, onClose, services, onConfirm, onBack }: Props) {
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

  // Filter selected services
  const selectedServices = services.filter(s =>
    (s.type === 'counter' && (s.count || 0) > 0) ||
    (s.type === 'toggle' && s.enabled)
  );

  // Placeholder totals (will be calculated by backend)
  const subtotal = 12000;
  const vat = 1285.70;
  const total = 10714.30;
  // Temporary only /\

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={styles.receipt_container}>
          <div className={styles.services_list}>
            {selectedServices.map((service, index) => (
              <div key={service.id} className={styles.service_row}>
                <span className={styles.count}>
                  {service.type === 'counter' ? service.count : 1}
                </span>
                <span className={styles.name}>{service.name}</span>
                <span className={styles.price}>
                  {service.type === 'counter' 
                    ? (service.price * (service.count || 0)).toLocaleString()
                    : service.price.toLocaleString()
                  }
                </span>
              </div>
            ))}
          </div>

          <div className={styles.totals_section}>
            <div className={styles.total_row}>
              <span>Total</span>
              <span>{subtotal.toLocaleString()}</span>
            </div>
            <div className={styles.total_row}>
              <span>Total</span>
              <span>{total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className={styles.total_row}>
              <span>VAT (12%)</span>
              <span>{vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>

          <div className={styles.button_group}>
            <button className={styles.back_btn} onClick={onBack}>
             Back
            </button>
            <button className={styles.confirm_btn} onClick={onConfirm}>
              Book Appointment <FontAwesomeIcon icon={faCircleUp} className={styles.icon_arrow}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}