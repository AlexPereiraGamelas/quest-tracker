/**
 * login header compoent
 */
import styles from "./index.module.scss";

const LoginHeader = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Login</h5>
      <p className={styles.message}>Get Started</p>
    </div>
  );
};

export default LoginHeader;
