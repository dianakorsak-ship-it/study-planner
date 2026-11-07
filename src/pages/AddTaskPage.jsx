import Layout from '../components/layout/Layout';
import styles from './Pages.module.css';

function AddTaskPage() {
  return (
    <Layout active="add">
      <h1>Додати завдання</h1>

      <form className={styles.form}>
        <input type="text" placeholder="Назва завдання" />
        <select>
          <option>Програмування</option>
          <option>Вища математика</option>
          <option>Англійська мова</option>
        </select>
        <input type="date" />
        <select>
          <option>Низький пріоритет</option>
          <option>Середній пріоритет</option>
          <option>Високий пріоритет</option>
        </select>
        <button className={styles.button}>Зберегти завдання</button>
      </form>
    </Layout>
  );
}

export default AddTaskPage;
