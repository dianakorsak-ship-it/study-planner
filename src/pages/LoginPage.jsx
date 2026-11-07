import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Pages.module.css';

const API_URL = 'https://my.api.mockaroo.com/login.json?key=2d6fc660';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

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

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginBox} onSubmit={handleSubmit}>
        <h1>Планер навчання</h1>
        <p>Увійди у свій ритм</p>
        <input
          type="email"
          placeholder="Електронна пошта"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p>{error}</p>}
        <button className={styles.button}>Увійти</button>
      </form>
    </div>
  );
}

export default LoginPage;
