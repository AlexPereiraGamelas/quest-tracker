/**
 * Register form component
 */

import { Link } from "react-router";
import styles from "./index.module.scss";

interface RegisterFormProps {
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => undefined;
}

const RegisterForm = ({ handleFormSubmit }: RegisterFormProps) => {
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
      <Link className={styles.linkToLogin} to="/login">
        Already have an account? Sign in <span>here</span>
      </Link>
      {/*TODO ADD LOADING STATE*/}
      <button className={styles.button} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default RegisterForm;
