// AboutPage.js
import Description from '../components/Description'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <Description title="Title 2" description="description 2" />
    </div>
  )
}

export default AboutPage
