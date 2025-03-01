/**
 * hook to abstract server status subscription
 */

import { doGet } from "@/http/requests";
import { useQuery } from "@tanstack/react-query";

const URL = "/auth/"
const QUERY_KEY_ID = "auth-status"

interface ServerStatusResponse  {
  message: string
}
const fetchServerStatus = () => doGet<ServerStatusResponse>(URL)

const useAuthStatus = () => useQuery({ queryKey: [QUERY_KEY_ID], queryFn: fetchServerStatus })

export default useAuthStatus