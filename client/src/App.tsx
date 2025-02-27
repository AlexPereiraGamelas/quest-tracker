import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const response = await fetch(`/api`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json: Record<string, string> = await response.json();
        setData(json);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("There was an error!", error.message);
        } else {
          console.error("An unknown error occurred");
        }
      }
    };
    fetchDemo();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test POP
        </p>
        <p>{data.message}</p>
      </div>
    </>
  );
}

export default App;
