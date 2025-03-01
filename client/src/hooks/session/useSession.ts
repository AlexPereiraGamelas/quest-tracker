/**
 * hook to access session from react-query context
 */
import { UserSession } from "@/pages/login/mutations/useLoginMutation";

interface UseSession {
  session?: UserSession,
  clearSession: () => void
}

const getSession = () => {
  const sessionString = localStorage.getItem("session")
  if(!sessionString || sessionString === "undefined"){
    return undefined
  }
  return JSON.parse(sessionString);
}

const clearSession = () => {
  return localStorage.removeItem("session")
}

const useSession = () : UseSession => {
  return {
    session: getSession(),
    clearSession,
  }
};

export default useSession;