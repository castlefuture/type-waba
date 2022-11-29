import { NOTFOUND } from "dns";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import Home2 from "./routes/Home2";
import SearchPage from "./routes/SearchPage";
import NotFound from "./routes/NotFound";
import Result from "./routes/Result";
import Cellar from "./routes/Cellar";
import Find from "./routes/Find";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home2",
        element: <Home2 />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "cellar",
        element: <Cellar />,
      },
      {
        path: "find",
        element: <Find />,
      },
    ],
  },
]);

export default router;
