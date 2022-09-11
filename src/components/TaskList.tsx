import { Trash } from "phosphor-react";
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <section>
      <div className={styles.taskListBox}>
        <div className={styles.box}>
          <input type="checkbox" />
          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        </div>
        <button title="Deletar Task">
          <Trash size={24} />
        </button>
      </div>
    </section>
  )
}