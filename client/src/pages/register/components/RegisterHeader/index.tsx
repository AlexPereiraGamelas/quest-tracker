/**
 * Register header compoent
 */
import styles from "./index.module.scss";

const RegisterHeader = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>SignUp</h5>
      <p className={styles.message}>Create your account</p>
    </div>
  );
};

export default RegisterHeader;
