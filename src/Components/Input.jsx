import { Button } from './Button';
import styles from './Input.module.css';

export function Input() {
  return (
    <section className={`${styles.section} container`}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <Button>Criar</Button>
    </section>
  );
}
