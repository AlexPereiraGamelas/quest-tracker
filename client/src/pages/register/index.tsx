/**
 * Register
 */
import { RegisterHeader, RegisterForm } from "./components";
import useRegister from "./useRegister";

import styles from "./index.module.scss";
import { useToast } from "@/hooks";

function Register() {
  const { DefaultToastContainer, createErrorToast } = useToast();
  const { handleFormSubmit } = useRegister(createErrorToast);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <RegisterHeader />
        <RegisterForm handleFormSubmit={handleFormSubmit} />
      </div>
      <DefaultToastContainer />
    </div>
  );
}

export default Register;
