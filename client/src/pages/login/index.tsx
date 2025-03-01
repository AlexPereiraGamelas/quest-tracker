/**
 * Login
 */
import { LoginHeader, LoginForm } from "./components";
import useLogin from "./useLogin";

import styles from "./index.module.scss";

function Login() {
  const { handleFormSubmit } = useLogin();

  return (
    <div className={styles.container}>
      <LoginHeader />
      <LoginForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Login;
