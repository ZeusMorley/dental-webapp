"use client";
import { useState } from "react";
import styles from "./Counter.module.css";

type Props = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
  };

  export function Counter({ value, onChange, min = 0, max = 4 }: Props) {
    const decrement = () => {
      if (value > min) onChange(value - 1);
    };
  
    const increment = () => {
      if (value < max) onChange(value + 1);
    };
  
    return (
      <div className={styles.counter}>
        <button onClick={decrement} disabled={value <= min}>−</button>
        <span>{value}</span>
        <button onClick={increment} disabled={value >= max}>+</button>
      </div>
    );
  }