import { NOTFOUND } from "dns";
import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./routes/Home";
import Home2 from "./routes/Home2";
import SearchPage from "./routes/SearchPage";
import NotFound from "./routes/NotFound";
import Cellar from "./routes/Cellar";
import Find from "./routes/Find";
import SearchDetail from "./routes/SearchDetail";
import Login from "./routes/LoginPage";
import Test from "./routes/Test";
import Signup from "./routes/SignupPage";
import CellarReview from "./routes/CellarReview";

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
        path: "home2",
        element: <Home2 />,
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
        path: "reviews/:reviewPk",
        element: <CellarReview />,
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
