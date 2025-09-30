"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { AppointmentBtn } from "./AppointmentBtn";

export function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
            setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo_group}>
                <img className={styles.logo} src="/TDS_logo_colored.svg" />
                <div className={styles.logo_text}>
                    <h3>Toothful</h3>
                    <h6>Dental Solutions</h6>
                </div>
            </div>
            <button
                className={styles.hamburger_menu}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen(v => !v)}
                type="button"
            >
                <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            </button>

            <nav id="mobile-nav" className={`${styles.nav_group} ${open ? styles.open : ""}`}>
                <div className={styles.nav_item}>About</div>
                <div className={styles.nav_item}>Contact</div>
                <AppointmentBtn />
            </nav>
        </header>
    );
}