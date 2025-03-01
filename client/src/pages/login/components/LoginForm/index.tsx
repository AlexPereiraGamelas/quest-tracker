/**
 * login form component
 */

import { useCallback } from "react";
import styles from "./index.module.scss";

const LoginForm = () => {
  const handleFormSubmit = useCallback(
    (form: React.FormEvent<HTMLFormElement>) => {
      console.log(form);
    },
    []
  );
  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        type="text"
        aria-label="username input"
        placeholder="username"
        className={styles.input}
      />
      <input
        className={styles.input}
        type="password"
        aria-label="password input"
        placeholder="password"
      />
      <button className={styles.button} type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
