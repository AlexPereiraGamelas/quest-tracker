/**
 * Login
 */
import { LoginHeader, LoginForm } from "./components";
import styles from "./index.module.scss";

function Login() {
  return (
    <div className={styles.container}>
      <LoginHeader />
      <LoginForm />
    </div>
  );
}

export default Login;
