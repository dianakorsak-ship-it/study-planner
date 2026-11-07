import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import styles from './Pages.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useLogin();

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
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
