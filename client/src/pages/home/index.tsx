/**
 * Home
 */
import useServerStatus from "./queries/useServerStatus";
import useAuthSatus from "./queries/useAuthStatus";

import styles from "./index.module.scss";
import { useSession } from "@/hooks";
import { useCallback } from "react";
import { Link } from "react-router";

function Home() {
  const { data, isError, error, isFetched } = useServerStatus();
  const { clearSession } = useSession();
  const {
    data: authData,
    isError: authIsError,
    error: authError,
    isFetched: authIsFetched,
  } = useAuthSatus();

  const handleLogout = useCallback(() => {
    clearSession();
    window.location.reload();
  }, [clearSession]);

  if (!isFetched || !authIsFetched) {
    return (
      <div className={styles.container}>
        <p>Loading</p>
      </div>
    );
  }

  if (isError || authIsError) {
    return <div>{error?.message || authError?.message}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>HOMEPAGE</h1>
      <p>api status: {data?.message}</p>
      <p>auth status: {authData?.message}</p>
      <Link className={styles.link} to={"/adventure/1"}>
        Sample Adventure Page
      </Link>
      <br />
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Home;
