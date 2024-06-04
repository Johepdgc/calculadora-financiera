import React from "react";
import ReactDOM from "react-dom/client";
// Enrutador para llamar componentes de React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./routes/Home.tsx";
import SimpleInterest from "./routes/SimpleInterest.tsx";
import PresentValue from "./routes/PresentValue.tsx";
import CompoundInterest from "./routes/CompoundInterest.tsx";
import ErrorPage from "./ErrorPage.tsx";
import "./index.css";

// Constante para llamar el enrutador
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/simple-interest",
        element: <SimpleInterest />,
      },
      {
        path: "present-value",
        element: <PresentValue />,
      },
      {
        path: "/compound-interest",
        element: <CompoundInterest />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
