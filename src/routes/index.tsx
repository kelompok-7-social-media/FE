import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

import Login from "pages";
import Register from "pages/Signup";
import Timeline from "pages/Timeline";
import Detail from "pages/Detail";
import Profile from "pages/Profile";
import EditProfile from "pages/EditProfile";
import EditPassword from "pages/EditPassword";
import { ThemeContext } from "utils/context";

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
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
