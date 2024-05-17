import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err: ", err);

  return (
    <>
      <h1>Oopsss!...</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </>
  );
};

export default Error;
