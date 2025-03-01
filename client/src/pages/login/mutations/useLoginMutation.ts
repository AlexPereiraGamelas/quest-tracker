/**
 * login mutation
 */

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LoginPayload } from "@/pages/login/components/LoginForm/types";
import { doPost } from "@/http/requests";

const URL = "/auth/login"

type UserSession = {
  id: string;
  username: string;
  token: string;
}

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: LoginPayload) => doPost<UserSession, LoginPayload>(URL, payload),
    onSuccess: (data) => {
      queryClient.setQueryData(["session"], data); // Store user data globally
    },
  });
}



export default useLoginMutation