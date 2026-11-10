import styles from "./Sidebar.module.css";

function Sidebar({ active }) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Планер навчання</h2>

      <nav className={styles.menu}>
        <a href="/" className={active === "home" ? styles.active : ""}>
          Головна
        </a>
        <a href="/add" className={active === "add" ? styles.active : ""}>
          Додати завдання
        </a>
        <a
          href="/completed"
          className={active === "completed" ? styles.active : ""}
        >
          Виконані завдання
        </a>
      </nav>

      <div className={styles.user}>
        <p>Студентка</p>
        <a href="/login">Вийти з акаунта</a>
      </div>
    </aside>
  );
}

export default Sidebar;
