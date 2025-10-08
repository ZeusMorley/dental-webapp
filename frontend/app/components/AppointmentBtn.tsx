import styles from "./AppointmentBtn.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  };

  export function AppointmentBtn({className, onClick, ...props }: Props) {
    return (
      <button
        className={`${styles.appointment_btn} ${className ?? ""}`}
        onClick={onClick}
        {...props}
      >
        Book appointment
      </button>
    );
  }
