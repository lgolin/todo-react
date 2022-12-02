import styles from './Task.module.css';

const tasks = [
  {
    id: 1,
    content: 'task number 1',
  },
  {
    id: 2,
    content: 'task number2',
  },
];

export function Task() {
  return (
    <main className={`${styles.classList} container`}>
      {tasks.map((task) => (
        <>
          <input type="checkbox" name={task.content} id={task.content} />
          <label for={task.content} key={task.content}>
            {task.content}
          </label>
        </>
      ))}
    </main>
  );
}
