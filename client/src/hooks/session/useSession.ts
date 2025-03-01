/**
 * hook to access session from react-query context
 */
import { UserSession } from "@/pages/login/mutations/useLoginMutation";

interface UseSession {
  session?: UserSession,
  getSession: () => UserSession | undefined,
  clearSession: () => void
}

const getSession = () => {
  const sessionString = localStorage.getItem("session")
  if(!sessionString){
    return undefined
  }

  return JSON.parse(sessionString);
}

const clearSession = () => {
  localStorage.removeItem("session")
}

const useSession = () : UseSession => {
  return {
    session: getSession(),
    getSession,
    clearSession
  }
};

export default useSession;