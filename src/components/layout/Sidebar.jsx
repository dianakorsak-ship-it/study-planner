import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar({ active }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Планер навчання</h2>

      <nav className={styles.menu}>
        <Link to="/" className={active === 'home' ? styles.active : ''}>
          Головна
        </Link>
        <Link to="/add" className={active === 'add' ? styles.active : ''}>
          Додати завдання
        </Link>
        <Link
          to="/completed"
          className={active === 'completed' ? styles.active : ''}
        >
          Виконані завдання
        </Link>
      </nav>

      <div className={styles.user}>
        <p>Студентка</p>
        <Link to="/login">Вийти з акаунта</Link>
      </div>
    </aside>
  );
}

export default Sidebar;
