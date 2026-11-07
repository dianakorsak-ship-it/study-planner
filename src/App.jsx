import TaskCard from './components/tasks/TaskCard';
import './App.css';

function App() {
  const task = {
    id: 1,
    title: 'Приклад завдання',
    subject: 'Програмування',
    date: '2099-01-01',
    priority: 'medium',
    done: false,
  };

  return (
    <div className="content">
      <h1>Планер навчання</h1>
      <TaskCard task={task} />
    </div>
  );
}

export default App;
