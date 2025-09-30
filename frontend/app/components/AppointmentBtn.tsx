import styles from "./AppointmentBtn.module.css";

export function AppointmentBtn() {
    return (
        <div className={styles.appointment_btn}>
            <button>Book Appointment</button>
        </div>
    );
}
