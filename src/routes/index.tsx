import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import EditPassword from "pages/EditPassword";
import EditProfile from "pages/EditProfile";
import Register from "pages/auth/Signup";
import Timeline from "pages/Timeline";
import Profile from "pages/Profile";
import Detail from "pages/Detail";
import Login from "pages/auth";
import { ThemeContext } from "utils/context";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/Group-Project7/social-media-app-api/1.0.0/";

const App = () => {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  axios.interceptors.request.use(function (config: any) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${checkToken}`;
    return config;
  });

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (
        data === "Missing or malformed JWT" ||
        [401, 403].includes(data.code)
      ) {
        removeCookie("token");
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: checkToken ? <Navigate to="/timeline" /> : <Register />,
    },
    {
      path: "/timeline",
      element: checkToken ? <Timeline /> : <Navigate to="/" />,
    },
    {
      path: "/detail",
      element: checkToken ? <Detail /> : <Navigate to="/" />,
    },
    {
      path: "/profile",
      element: checkToken ? <Profile /> : <Navigate to="/" />,
    },
    {
      path: "/edit-profile",
      element: checkToken ? <EditProfile /> : <Navigate to="/" />,
    },
    {
      path: "/edit-password",
      element: checkToken ? <EditPassword /> : <Navigate to="/" />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
