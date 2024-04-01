import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/Aboutdfsg";
import User from "./components/UserClass";

function App() {
  const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/contact-us", element: <ContactUs /> },
        { path: "/about-us", element: <AboutUs /> },
        {
          path: "/user",
          element: <User name="Kashif" location="Gandhinagar" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
