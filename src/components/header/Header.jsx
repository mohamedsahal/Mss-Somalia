import styles from "./header.module.scss"
const Header = () => {
  return (
    <div >
        <header className={styles.header}>
            <ul>
                <li >
                    <div className={styles.logo}>
                    <img src="../../miss.png"/>
                    <a href="#" className={styles.logo_text}>Mss<br></br>Somalia</a>
                    </div>
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