import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://my.api.mockaroo.com/login.json?key=2d6fc660';

function useLogin() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function login(email, password) {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const user = Array.isArray(data) ? data[0] : data;
        if (email === user.email && password === String(user.password)) {
          navigate('/');
        } else {
          setError('Неправильна пошта або пароль');
        }
      })
      .catch(() => {
        setError('Не вдалося зв’язатися з сервером');
      });
  }

  return { login, error };
}

export default useLogin;
