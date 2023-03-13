import styles from "./header.module.scss"

const Header = () => {
  return (
    <div >
        <header className={styles.header}>
            <ul>
                <li>
                    <a href="#" className={styles.logo}>Mss-Somalia</a>
                </li>

                <li>
                    <a href="#" className={styles.all}>All Compoteters</a>
                </li>

            </ul>
        </header>
    </div>
  )
}

export default Header