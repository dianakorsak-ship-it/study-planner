import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import TaskCard from '../components/tasks/TaskCard';
import styles from './Pages.module.css';

const API_URL = 'https://my.api.mockaroo.com/users.json?key=2d6fc660';

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Не вдалося завантажити завдання');
        setLoading(false);
      });
  }, []);

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
