// MainPage.js
import Description from '../components/Description'
import styles from './MainPage.module.css'

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Description title="Title" description="description" />
    </div>
  )
}

export default MainPage
