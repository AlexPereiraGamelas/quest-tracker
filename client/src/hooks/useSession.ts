/**
 * hook to access session from react-query context
 */
import { UserSession } from "@/pages/login/mutations/useLoginMutation";

const useSession = () : {session: UserSession | undefined} => {
  const sessionString = localStorage.getItem("session")
  if(!sessionString){
    return {
      session: undefined
    }
  }
  return {
    session: JSON.parse(sessionString)
  }
};

export default useSession;