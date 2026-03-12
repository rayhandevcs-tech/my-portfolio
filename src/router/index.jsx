import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import BookReviews from "../pages/BookReviews/BookReviews";
import Achievements from "../pages/Achievements/Achievements";
import Travel from "../pages/Travel/Travel";
import Research from "../pages/Research/Research";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetails /> },
      { path: "book-reviews", element: <BookReviews /> },
      { path: "achievements", element: <Achievements /> },
      { path: "travel", element: <Travel /> },
      { path: "research", element: <Research /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:slug", element: <ProjectDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);