import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo_group}>
                <img className={styles.logo} src="/TDS_logo_colored.svg" />
                <div className={styles.logo_text}>
                    <h3>Toothful</h3>
                    <h6>Dental Solutions</h6>
                </div>
            </div>
            <div className={styles.hamburger_menu}>
                <FontAwesomeIcon icon={faBars} className={styles.icon}/>
            </div>
            <div className={styles.nav_group}>
                <div className={styles.nav_item}>About</div>
                <div className={styles.nav_item}>Contact</div>
                <div className={styles.nav_item}>Book Appointment</div>
            </div>
        </header>
    );
}