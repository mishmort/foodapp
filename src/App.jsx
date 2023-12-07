import "./App.css";
import { routes } from "./Routes";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter(routes);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
