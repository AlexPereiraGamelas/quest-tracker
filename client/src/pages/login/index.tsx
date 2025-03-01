/**
 * Login
 */
import { LoginHeader, LoginForm } from "./components";
import useLogin from "./useLogin";

import styles from "./index.module.scss";
import { useToast } from "@/hooks";

function Login() {
  const { DefaultToastContainer, createSuccessToast, createErrorToast } =
    useToast();
  const { handleFormSubmit } = useLogin(createSuccessToast, createErrorToast);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LoginHeader />
        <LoginForm handleFormSubmit={handleFormSubmit} />
      </div>
      <DefaultToastContainer />
    </div>
  );
}

export default Login;
