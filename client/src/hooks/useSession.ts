/**
 * hook to access session from react-query context
 */
import { UserSession } from "@/pages/login/mutations/useLoginMutation";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useSession = (): UseQueryResult<UserSession | null> => {
  return useQuery<UserSession | null>({
    queryKey: ["session"],
    queryFn: () => null, // Just returns the cached data, no refetching needed
    staleTime: Infinity, // Keep user data available
  });
};

export default useSession;