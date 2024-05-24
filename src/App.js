import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter} from "react-router-dom"
import {RouterProvider,Outlet} from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestrauntMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";            

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));     

const AppLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>loading ...</h1>}><About/></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading ...</h1>}> <Grocery/> </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu/>,
      }
    ]
  },
  
])

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router = {appRouter} />);

