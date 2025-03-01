/**
 * login form component
 */

import { useCallback } from "react";
import { useNavigate } from "react-router";
import useLoginMutation from "./mutations/useLoginMutation";

import styles from "./index.module.scss";

const LoginForm = () => {
  const navigate = useNavigate();
  const { mutate } = useLoginMutation();

  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const username = data.get("username");
      //TODO replace with form validator
      if (username instanceof File || !username) {
        return undefined;
      }
      const password = data.get("password");
      //TODO replace with form validator
      if (password instanceof File || !password) {
        return undefined;
      }

      mutate(
        {
          username: username,
          password: password,
        },
        {
          onSuccess: () => navigate("/"),
        }
      );
    },
    [mutate, navigate]
  );

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
