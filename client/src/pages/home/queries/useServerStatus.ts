/**
 * hook to abstract server status subscription
 */

import { doGet } from "@/http/requests";
import { useQuery } from "@tanstack/react-query";

const URL = "/api/serverStatus"
const QUERY_KEY_ID = "server-status"

interface ServerStatusResponse {
  message: string
}

const fetchServerStatus = () => doGet<ServerStatusResponse>(URL)

const useServerStatus = () => useQuery({ queryKey: [QUERY_KEY_ID], queryFn: fetchServerStatus })

export default useServerStatus