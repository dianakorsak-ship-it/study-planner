import styles from './TaskCard.module.css';

function TaskCard({ task }) {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{task.title}</h3>
        <p className={styles.subject}>{task.subject}</p>
      </div>

      <div className={styles.right}>
        <span>{task.date}</span>
        <span className={styles.priority}>{task.priority}</span>
      </div>
    </div>
  );
}

export default TaskCard;
