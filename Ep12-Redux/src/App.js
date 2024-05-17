import { lazy, Suspense } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ThemeContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
    <div className="p-4">
      <Header />
      <Outlet />
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Kashif....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <ThemeContext.Provider value={"broo"}>
        <RouterProvider router={appRouter} />
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;
