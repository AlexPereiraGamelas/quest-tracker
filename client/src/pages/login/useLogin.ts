/**
 * useLogin
 * 
 * Hook containing login component logic
 */

import { useNavigate } from "react-router";
import useLoginMutation from "./mutations/useLoginMutation";
import { useCallback } from "react";

const useLogin = () => {
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

  return  {
    handleFormSubmit
  }
}

export default useLogin