import styles from "./Pages.module.css";

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginBox}>
        <h1>Планер навчання</h1>
        <p>Увійди у свій ритм</p>
        <input type="email" placeholder="Електронна пошта" />
        <input type="password" placeholder="Пароль" />
        <button className={styles.button}>Увійти</button>
      </form>
    </div>
  );
}

export default LoginPage;
