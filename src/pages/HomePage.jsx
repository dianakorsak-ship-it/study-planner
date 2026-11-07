import Layout from '../components/layout/Layout';
import TaskCard from '../components/tasks/TaskCard';
import useFetchTasks from '../hooks/useFetchTasks';
import styles from './Pages.module.css';

function HomePage() {
  const { tasks, loading, error } = useFetchTasks();

  const activeCount = tasks.filter((task) => !task.done).length;
  const doneCount = tasks.filter((task) => task.done).length;

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
          <h2>{activeCount}</h2>
        </div>
        <div className={styles.stat}>
          <p>Виконано</p>
          <h2>{doneCount}</h2>
        </div>
      </div>

      <h2>Найближчі завдання</h2>
      {loading && <p>Завантаження...</p>}
      {error && <p>{error}</p>}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Layout>
  );
}

export default HomePage;
