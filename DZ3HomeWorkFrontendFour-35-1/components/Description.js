    // Description.js
import styles from './Description.module.css'

function Description({ title, description }) {
  return (
    <div className={styles.description}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Description
