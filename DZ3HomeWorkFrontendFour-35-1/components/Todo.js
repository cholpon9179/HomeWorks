// Todo.js
import styles from './Todo.module.css'

function Todo({ todo }) {
  return <div className={styles.todo}>{todo}</div>
}

export default Todo
