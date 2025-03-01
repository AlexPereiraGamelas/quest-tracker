/**
 * hook to access session from react-query context
 */
import { useQuery } from "@tanstack/react-query";

const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: () => null, // Just returns the cached data, no refetching needed
    staleTime: Infinity, // Keep user data available
    initialData: {}
  });
};

export default useSession;