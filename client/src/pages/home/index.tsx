/**
 * Home
 */
import { useNavigate } from "react-router";

import useServerStatus from "./queries/useServerStatus";
import useAuthSatus from "./queries/useAuthStatus";
import useSession from "@/hooks/useSession";
import { useEffect } from "react";

import styles from "./index.module.scss";

function Home() {
  const navigate = useNavigate();
  const { data, isError, error, isFetched } = useServerStatus();
  const { data: session } = useSession();
  const {
    data: authData,
    isError: authIsError,
    error: authError,
    isFetched: authIsFetched,
  } = useAuthSatus();

  useEffect(() => {
    if (!session) {
      navigate("/login");
    }
  }, [navigate, session]);

  if (!isFetched || !authIsFetched) {
    return <div>Loading</div>;
  }

  if (isError || authIsError) {
    return <div>{error?.message || authError?.message}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>HOMEPAGE</h1>
      <p>{data?.message}</p>
      <p>api status: {data?.status}</p>
      <p>auth status: {authData?.status}</p>
    </div>
  );
}

export default Home;
