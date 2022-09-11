import { Trash } from "phosphor-react";
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <section>
      <div className={styles.taskListBox}>
        <input className={styles.styleD} type="checkbox" />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        <button title="Deletar Task">
          <Trash size={20} />
        </button>
      </div>
    </section>
  )
}