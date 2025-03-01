/**
 * useRegister
 * 
 * Hook containing Register component logic
 */

import { useNavigate } from "react-router";
import useRegisterMutation from "./mutations/useRegisterMutation";
import { useCallback, useEffect } from "react";
import type { Id } from "react-toastify";

const useRegister = (createErrorToast: (message: string) => Id) => {
  const navigate = useNavigate();
  const { mutate: registerUserMutation, isError } = useRegisterMutation();

  useEffect(() => {
    if(isError){
      createErrorToast("Something went wrong! Please try again")
    }
  }, [isError, createErrorToast])

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

      registerUserMutation(
        {
          username: username,
          password: password,
        },
        {
          onSuccess: () => navigate("/login?registerSuccess='true'"),
        }
      );
    },
    [registerUserMutation, navigate]
  );

  return  {
    handleFormSubmit
  }
}

export default useRegister