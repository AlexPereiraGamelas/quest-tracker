/**
 * login mutation
 */

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoginPayload } from "@/pages/login/components/LoginForm/types";

const URL = "/auth/login"

type UserSession = {
  id: string;
  username: string;
  token: string;
}

const login = async (payload: LoginPayload) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      //Parse response into json and type it
      const session: UserSession = await response.json();
      return session
  
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("There was an error!", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
};

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (data) => {
      queryClient.setQueryData(["session"], data); // Store user data globally
    },
  });
}



export default useLoginMutation