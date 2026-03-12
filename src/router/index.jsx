import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ROUTES } from "../constants/routes";

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
import AdminMessages from "../pages/AdminMessages/AdminMessages";
import AdminPosts from "../pages/AdminPosts/AdminPosts";
import AdminPostNew from "../pages/AdminPostNew/AdminPostNew";
import AdminPostEdit from "../pages/AdminPostEdit/AdminPostEdit";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.BLOG, element: <Blog /> },
      { path: ROUTES.BLOG_DETAILS, element: <BlogDetails /> },
      { path: ROUTES.BOOK_REVIEWS, element: <BookReviews /> },
      { path: ROUTES.ACHIEVEMENTS, element: <Achievements /> },
      { path: ROUTES.TRAVEL, element: <Travel /> },
      { path: ROUTES.RESEARCH, element: <Research /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.PROJECT_DETAILS, element: <ProjectDetails /> },
      { path: ROUTES.ADMIN_MESSAGES, element: <AdminMessages /> },
      { path: ROUTES.ADMIN_POSTS, element: <AdminPosts /> },
      { path: ROUTES.ADMIN_POSTS_NEW, element: <AdminPostNew /> },
      { path: ROUTES.ADMIN_POSTS_EDIT, element: <AdminPostEdit /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);