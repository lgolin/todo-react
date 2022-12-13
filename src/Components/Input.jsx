import { useState } from 'react';
import { Button } from './Button';
import styles from './Input.module.css';

export function Input() {
  const [ativo, setAtivo] = useState(true);

  return (
    <section className={`${styles.section} container`}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Ativo' : 'Inativo'}
      </button>
    </section>
  );
}
