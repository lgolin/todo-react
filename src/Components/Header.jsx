import styles from './Header.module.css';
import logo from '../assets/logo.png';
import { Input } from './Input';
import { Task } from './Task';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Logotipo do Todo" />
      </header>
      <Input />
      <Task />
    </>
  );
}
