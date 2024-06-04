import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div
        id="nav"
        className="h-screen bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform transition duration-200 ease-in-out"
      >
        <h2 className="text-2xl font-extrabold">Calculadora Finaciera</h2>
        <nav>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            <Link to={`/home`}>Inicio</Link>
          </a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            <Link to={`simple-interest`}>Interés Simple</Link>
          </a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            <Link to={`present-value`}>Valor Actual</Link>
          </a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
            <Link to={`compound-interest`}>Interés Compuesto</Link>
          </a>
        </nav>
      </div>
      <main className="ml-64 p-8">
        <div id="detail">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
