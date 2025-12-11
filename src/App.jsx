import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import About from "./About";
import Signup from "./Signup";
import Login from "./Register";
import Rootlayout from "./Rootlayout";
import Register from "./Register";
import signin from "./Signup";
import Globalfinds from "./Global-finds";
const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: Rootlayout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "global-finds", Component: Globalfinds },
      ],
    },
    {
      path: "/signin",
      Component: signin,
    }
    ,{
      path: "/register",
      Component: Register,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
