/**
 * login form component
 */

import { useCallback, useEffect } from "react";
import useLoginMutation from "./mutations/useLoginMutation";

import styles from "./index.module.scss";

const LoginForm = () => {
  const { mutate, data } = useLoginMutation();

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const username = data.get("username");
      if (username instanceof File || !username) {
        return undefined;
      }
      const password = data.get("password");
      if (password instanceof File || !password) {
        return undefined;
      }

      mutate({
        username: username,
        password: password,
      });
    },
    [mutate]
  );

  useEffect(() => {
    if (data) {
      localStorage.setItem(data?.id, JSON.stringify(data));
    }
  }, [data]);

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
