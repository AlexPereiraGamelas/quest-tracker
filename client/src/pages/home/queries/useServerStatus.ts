/**
 * hook to abstract server status subscription
 */

import { useQuery } from "@tanstack/react-query";

const URL = "/api/serverStatus"
const QUERY_KEY_ID = "server-status"

type ServerStatusResponse = {
  message: string
}

interface ServerStatus extends ServerStatusResponse {
  status: number
}

const fetchServerStatus = async () => {
  try {
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    //Parse response into json and type it
    const json: ServerStatusResponse = await response.json();
    const serverStatus : ServerStatus = {
      ...json,
      status: response.status
    } 
    return serverStatus

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("There was an error!", error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
};

const useServerStatus = () => useQuery({ queryKey: [QUERY_KEY_ID], queryFn: fetchServerStatus })

export default useServerStatus