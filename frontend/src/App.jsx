import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Pages/ManPage/MainPage";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Leadership from "./Pages/Leadership/Leadership";
import Services from "./Pages/Services/Services";
import Board from "./Pages/Board/Board";

function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <MainPage/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/leadership",
        element: <Leadership/>,
      },
      {
        path: "/board",
        element: <Board/>,
      },
      {
        path: "/our-services",
        element: <Services/>,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
