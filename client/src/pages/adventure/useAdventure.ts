/**
 * useAdventure
 * 
 * hook containing adventure logic
 */

import { useMemo } from "react"

const useAdventure = (id?: string) => {
  const QUESTS_DATA = useMemo(() => ([{
    title: "Quest 1",
    description: "",
  },
  {
    title: "Quest 2",
    description: "",
  },
  {
    title: "Quest 3",
    description: "",
  }
]),[])

  return {
    title: "Anel de Fogo",
    id,
    QUESTS_DATA
  }
}

export default useAdventure