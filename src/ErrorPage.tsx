import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError() as Error;
  console.log(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
    >
      <h1 className="text-4xl font-bold mb-4">Wrong path!</h1>
      <p className="text-lg text-gray-700 mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm italic text-gray-500">
        <i>{error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
