/**
 * login mutation
 */

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { doPost } from "@/http/requests";
import { RegisterPayload } from "@/pages/register/types"

const URL = "/auth/register"

type UserSession = {
  id: string;
  username: string;
  token: string;
}

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: RegisterPayload) => doPost<UserSession, RegisterPayload>(URL, payload),
    onSuccess: (data) => {
      queryClient.setQueryData(["session"], data); // Store user data globally
    },
  });
}



export default useLoginMutation