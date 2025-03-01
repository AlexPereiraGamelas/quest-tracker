/**
 * login mutation
 */

import { useMutation } from "@tanstack/react-query"
import { LoginPayload } from "@/pages/login/types";
import { doPost } from "@/http/requests";

const URL = "/auth/login"

export type UserSession = {
  id: string;
  username: string;
  token: string;
}

const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => doPost<UserSession, LoginPayload>(URL, payload),
    onSuccess: (data) => {
      localStorage.setItem("session", JSON.stringify(data))
    },
  });
}



export default useLoginMutation