/**
 * useLogin
 * 
 * Hook containing login component logic
 */

import { useNavigate, useSearchParams } from "react-router";
import useLoginMutation from "./mutations/useLoginMutation";
import { useCallback, useEffect } from "react";
import type { Id } from "react-toastify";

const useLogin = (createSuccessToast: (message: string) => Id, createErrorToast: (message: string) => Id) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { mutate: loginUserMutation, isError } = useLoginMutation();

  useEffect(() => {
    const isSuccessRegister = searchParams.get("registerSuccess");
    if(isSuccessRegister){
      createSuccessToast("Registered with success! Welcome.")
    }
  },[createSuccessToast, searchParams])

  useEffect(() => {
    console.log(isError)
    if(isError){
      createErrorToast("Something went wrong, please try again!")
    }
  }, [createErrorToast, isError])

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

      loginUserMutation(
        {
          username: username,
          password: password,
        },
        {
          onSuccess: () => navigate("/"),
        }
      );
    },
    [loginUserMutation, navigate]
  );

  return  {
    handleFormSubmit
  }
}

export default useLogin