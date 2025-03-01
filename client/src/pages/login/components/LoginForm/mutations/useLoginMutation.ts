/**
 * login mutation
 */

import { useMutation } from "@tanstack/react-query"
import { LoginPayload } from "../types";
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
      const json: UserSession = await response.json();
      return json
  
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("There was an error!", error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
};

const useLoginMutation = () =>
  useMutation({
    mutationFn: (payload: LoginPayload) => login(payload)
  });


export default useLoginMutation