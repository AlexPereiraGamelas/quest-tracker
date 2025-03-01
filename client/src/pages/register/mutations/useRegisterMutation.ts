/**
 * login mutation
 */

import { useMutation } from "@tanstack/react-query"
import { doPost } from "@/http/requests";
import { RegisterPayload } from "@/pages/register/types"

const URL = "/auth/register"

type UserSession = {
  id: string;
  username: string;
  token: string;
}

const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => doPost<UserSession, RegisterPayload>(URL, payload),
  });
}



export default useRegisterMutation