/**
 * useRegister
 * 
 * Hook containing Register component logic
 */

import { useNavigate } from "react-router";
import useRegisterMutation from "./mutations/useRegisterMutation";
import { useCallback } from "react";

const useRegister = () => {
  const navigate = useNavigate();
  const { mutate } = useRegisterMutation();

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
          onSuccess: () => navigate("/login"),
        }
      );
    },
    [mutate, navigate]
  );

  return  {
    handleFormSubmit
  }
}

export default useRegister