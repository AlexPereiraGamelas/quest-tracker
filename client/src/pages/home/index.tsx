/**
 * Home
 */

import useServerStatus from "./queries/useServerStatus";

function Home() {
  const { data, isError, error, isFetched } = useServerStatus();

  if (!isFetched) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>{data?.message}</p>
      <p>api status: {data?.status}</p>
    </div>
  );
}

export default Home;
