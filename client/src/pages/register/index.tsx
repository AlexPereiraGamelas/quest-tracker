/**
 * Register
 */
import { RegisterHeader, RegisterForm } from "./components";
import useRegister from "./useRegister";

import styles from "./index.module.scss";

function Register() {
  const { handleFormSubmit } = useRegister();

  return (
    <div className={styles.container}>
      <RegisterHeader />
      <RegisterForm handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default Register;
