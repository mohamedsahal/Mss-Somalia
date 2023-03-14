import competitors from '../../assets/competitors.json'
import styles from './competitors.module.scss'

const Competitors = () => {
  return (
    <div className={styles.competitors_container}>
        <div className={styles.competitors_header}>
            <span>Mss-Somalia</span>
            <p>Miss Somalia organization is a grassroots women led community organization whose aim is to respond 
                to social development related issues in Somalia.
            </p>
        <div className={styles.competitors}>
            {competitors.map((competitor) =>(
                <span key={competitor.Id}>{competitor.FirstName}</span>
            ))}
           
        </div>
        </div>
    </div>
  )
}

export default Competitors