"use client";
import styles from "./Toggle.module.css";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Toggle({ checked, onChange }: Props) {
  return (
    <button
      className={`${styles.toggle} ${checked ? styles.checked : ""}`}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
    >
      <span className={styles.thumb} />
    </button>
  );
}