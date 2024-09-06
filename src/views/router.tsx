import { createBrowserRouter } from "react-router-dom";
import MainView from "./main/MainView";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <MainView />,
  },
  {
    path: "/react",
    id: "app",
    element: <App />,
  },
]);

export default router;
