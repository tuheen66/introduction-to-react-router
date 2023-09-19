import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // useRouteError hook to handle not available page
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>page not found</h3>
          <p>Go back where you are from</p>

          {/* go back button */}
          <Link to='/'>
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
