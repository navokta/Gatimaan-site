import './App.css'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/layout/about",
    element: (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/layout/courses",
    element: (
      <div>
        <Header />
        <Courses />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Contact",
    element: (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/layout/contact",
    element: (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    ),
  }
]);

function App() {
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
