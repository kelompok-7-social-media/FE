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

// axios.defaults.baseURL =
//   "https://virtserver.swaggerhub.com/Group-Project7/social-media-app-api/1.0.0/";
axios.defaults.baseURL = "http://13.213.0.148:8000/";

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
