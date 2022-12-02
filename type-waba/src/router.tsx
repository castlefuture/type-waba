import { NOTFOUND } from "dns";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import SearchPage from "./routes/SearchPage";
import NotFound from "./routes/NotFound";
import Cellar from "./routes/Cellar";
import Find from "./routes/Find";
import SearchDetail from "./routes/SearchDetail";
import Login from "./routes/LoginPage";
import Test from "./routes/Test";
import Signup from "./routes/SignupPage";

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
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "wines/:winePk",
        element: <SearchDetail />,
      },
      {
        path: "cellar",
        element: <Cellar />,
      },
      {
        path: "find",
        element: <Find />,
      },
      {
        path: "test",
        element: <Test />,
      },
    ],
  },
]);

export default router;
