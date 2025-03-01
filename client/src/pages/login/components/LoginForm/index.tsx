/**
 * login form component
 */

import styles from "./index.module.scss";

interface LoginFormProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => undefined;
}

const LoginForm = ({ handleFormSubmit }: LoginFormProps) => {
  return (
    <form className={styles.container} onSubmit={handleFormSubmit}>
      <input
        name="username"
        type="text"
        aria-label="username input"
        placeholder="username"
        className={styles.input}
      />
      <input
        name="password"
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
