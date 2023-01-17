import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "pages";
import Register from "pages/Signup";
import Timeline from "pages/Timeline";
import Detail from "pages/Detail";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import EditPassword from "pages/EditPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/edit-password",
    element: <EditPassword />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
