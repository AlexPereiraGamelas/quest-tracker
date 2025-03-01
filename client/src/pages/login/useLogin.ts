/**
 * useLogin
 * 
 * Hook containing login component logic
 */

import { useNavigate, useSearchParams } from "react-router";
import useLoginMutation from "./mutations/useLoginMutation";
import { useCallback, useEffect } from "react";
import type { Id } from "react-toastify";

const useLogin = (createSuccessToast: (message: string) => Id) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
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

  useEffect(() => {
    const isSuccessRegister = searchParams.get("registerSuccess");
    if(isSuccessRegister){
      createSuccessToast("Registered with success! Welcome.")
    }
  },[createSuccessToast, searchParams])

  return  {
    handleFormSubmit
  }
}

export default useLogin