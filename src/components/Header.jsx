import styles from './Header.module.css'
import nanaLogo from '../assets/nana-logo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <img src={nanaLogo} alt="Logotipo do Ignite" />
        </div>
    )
}