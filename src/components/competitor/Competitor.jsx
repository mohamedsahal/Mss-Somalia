import styles from './competitor.module.scss'

const Competitor = ({competitor}) => {
  return (
    <div className={styles.Competitor}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName}</span>
            <span className={styles.name}>{competitor.RepresentingState}</span>
            <span  className={styles.votes}>Total Votes: {competitor.NumberofVotes}</span>
        </div>
    </div>
  )
}

export default Competitor