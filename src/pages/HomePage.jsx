import Layout from "../components/layout/Layout";
import TaskCard from "../components/tasks/TaskCard";
import styles from "./Pages.module.css";

const tasks = [
  {
    id: 1,
    title: "Приклад завдання",
    subject: "Програмування",
    date: "2026-11-10",
    priority: "Високий",
  },
  {
    id: 2,
    title: "Практична робота",
    subject: "Вища математика",
    date: "2026-11-12",
    priority: "Середній",
  },
];

function HomePage() {
  return (
    <Layout active="home">
      <div className={styles.header}>
        <h1>Мої завдання</h1>
        <a href="#" className={styles.button}>
          + Додати завдання
        </a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <p>Активні завдання</p>
          <h2>2</h2>
        </div>
        <div className={styles.stat}>
          <p>Виконано</p>
          <h2>6</h2>
        </div>
      </div>

      <h2>Найближчі завдання</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Layout>
  );
}

export default HomePage;
