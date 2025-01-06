import { createBrowserRouter } from "react-router-dom"; // React Router v6.4+

import App from "../App"; // Your layout component (includes Navbar)
import About from "../Pages/About"; // About page component
import Contact from "../Pages/Contact"; // Contact page component
import Home from "../Pages/Home"; // Home page component
import Services from "../Pages/Services"; // Services page component

const router = createBrowserRouter([
  {
    path: '/',  // Root path, rendering App component
    element: <App />,  // This is your layout component
    children: [
      {
        index: true,  // This makes Home the default route ("/")
        element: <Home />  // Home page component will be rendered here
      },
      {
        path: '/about',  // About page route
        element: <About />  // About page component will be rendered here
      },
      {
        path: "/services",  // Services page route
        element: <Services />  // Services page component will be rendered here
      },
      {
        path: "/contact",  // Contact page route
        element: <Contact />  // Contact page component will be rendered here
      }
    ]
  }
]);

export default router;
