import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

function Layout({ active, children }) {
  return (
    <div className={styles.layout}>
      <Sidebar active={active} />
      <main className={styles.content}>{children}</main>
    </div>
  );
}

export default Layout;
