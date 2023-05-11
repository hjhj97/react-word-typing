import { createBrowserRouter } from "react-router-dom";
import Game from "../pages/Game";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "game", element: <Game /> },
    ],
  },
]);

export default router;
