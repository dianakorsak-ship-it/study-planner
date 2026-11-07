import { useState, useEffect } from 'react';

const API_URL = 'https://my.api.mockaroo.com/users.json?key=2d6fc660';

function useFetchTasks() {
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

  return { tasks, loading, error };
}

export default useFetchTasks;
