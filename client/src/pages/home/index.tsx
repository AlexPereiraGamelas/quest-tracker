/**
 * Home
 */

import useServerStatus from "./queries/useServerStatus";
import useAuthSatus from "./queries/useAuthStatus";

function Home() {
  const { data, isError, error, isFetched } = useServerStatus();
  const {
    data: authData,
    isError: authIsError,
    error: authError,
    isFetched: authIsFetched,
  } = useAuthSatus();

  if (!isFetched || !authIsFetched) {
    return <div>Loading</div>;
  }

  if (isError || authIsError) {
    return <div>{error?.message || authError?.message}</div>;
  }

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>{data?.message}</p>
      <p>api status: {data?.status}</p>
      <p>auth status: {authData?.status}</p>
    </div>
  );
}

export default Home;
