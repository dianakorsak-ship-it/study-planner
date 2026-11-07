import Layout from '../components/layout/Layout';
import TaskCard from '../components/tasks/TaskCard';

const tasks = [
  {
    id: 1,
    title: 'Конспект лекції',
    subject: 'Психологія',
    date: '2026-11-05',
    priority: 'Низький',
  },
  {
    id: 2,
    title: 'Лабораторна робота',
    subject: 'Програмування',
    date: '2026-11-03',
    priority: 'Середній',
  },
];

function CompletedPage() {
  return (
    <Layout active="completed">
      <h1>Твої маленькі перемоги</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Layout>
  );
}

export default CompletedPage;
