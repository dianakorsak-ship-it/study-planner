import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import CompletedPage from './pages/CompletedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/add" element={<AddTaskPage />} />
      <Route path="/completed" element={<CompletedPage />} />
    </Routes>
  );
}

export default App;
