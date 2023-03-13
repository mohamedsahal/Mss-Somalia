import styles from './timer.module.scss'
const Timer = () => {
  return (
    <div className={styles.timer}>
        <h1>VOTING ENDS IN</h1>
        <div className={styles.times}>
            <div className={styles.digit_text}></div>
            <span className={styles.digit}>08</span>
            <span className={styles.text}>Days</span>
        </div>
        <div className={styles.times}>
            <div className={styles.digit_text}></div>
            <span className={styles.digit}>08</span>
            <span className={styles.text}>Days</span>
        </div>
        <div className={styles.times}>
            <div className={styles.digit_text}></div>
            <span className={styles.digit}>08</span>
            <span className={styles.text}>Days</span>
        </div>
        <div className={styles.times}>
            <div className={styles.digit_text}></div>
            <span className={styles.digit}>08</span>
            <span className={styles.text}>Days</span>
        </div>
    </div>
  )
}

export default Timer