import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./components/courses-page/ReadMore"; // Adjust path if needed
import Addcourse from "./components/Admin/Addcourse";
import Editcourse from "./components/Admin/Editcourse";
import AddNews from "./components/Admin/Addnews";
import NewsList from './components/News/NewsList'; // 👈 Import the page

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/layout/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/layout/courses",
    element: (
      <>
        <Header />
        <Courses />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/layout/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/courses/:id",
    element: (
      <>
        <Header />
        <CourseDetails />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin/add-course",
    element: (
      <>
        <Addcourse />
      </>
    ),
  },
  {
    path: "/admin/edit-course/:id",
    element: (
      <>
        <Editcourse />
      </>
    ),
  },
  {
    path: "/admin/add-news",
    element: <AddNews />,
  },
  {
    path: "/news",
    element: (
      <>
        <Header />
        <NewsList />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Header />
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>404 - Page Not Found</h2>
          <p>Looks like this page doesn't exist.</p>
        </div>
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
