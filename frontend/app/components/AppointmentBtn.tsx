import styles from "./AppointmentBtn.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  };

  export function AppointmentBtn({className, ...props }: Props) {
    return (
      <button
        className={`${styles.appointment_btn} ${className ?? ""}`}
        {...props}
      >
        Book appointment
      </button>
    );
  }
