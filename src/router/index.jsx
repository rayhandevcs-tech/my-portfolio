import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import BookReviews from "../pages/BookReviews/BookReviews";
import BookReviewDetails from "../pages/BookReviewDetails/BookReviewDetails";
import Achievements from "../pages/Achievements/Achievements";
import Travel from "../pages/Travel/Travel";
import Research from "../pages/Research/Research";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";
import AdminLayout from "../components/admin/AdminLayout/AdminLayout";

const AdminLogin = lazy(() => import("../pages/AdminLogin/AdminLogin"));
const AdminDashboard = lazy(() =>
  import("../pages/AdminDashboard/AdminDashboard")
);
const AdminMessages = lazy(() =>
  import("../pages/AdminMessages/AdminMessages")
);
const AdminPosts = lazy(() => import("../pages/AdminPosts/AdminPosts"));
const AdminPostNew = lazy(() => import("../pages/AdminPostNew/AdminPostNew"));
const AdminPostEdit = lazy(() =>
  import("../pages/AdminPostEdit/AdminPostEdit")
);

const AdminBooks = lazy(() => import("../pages/AdminBooks/AdminBooks"));
const AdminBookNew = lazy(() => import("../pages/AdminBookNew/AdminBookNew"));
const AdminBookEdit = lazy(() => import("../pages/AdminBookEdit/AdminBookEdit"));

function LazyPage({ children }) {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      {children}
    </Suspense>
  );
}

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
      { path: "book-reviews/:slug", element: <BookReviewDetails /> },
      { path: "achievements", element: <Achievements /> },
      { path: "travel", element: <Travel /> },
      { path: "research", element: <Research /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:slug", element: <ProjectDetails /> },
    ],
  },
  {
    path: "/admin/login",
    element: (
      <LazyPage>
        <AdminLogin />
      </LazyPage>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "dashboard",
        element: (
          <LazyPage>
            <AdminDashboard />
          </LazyPage>
        ),
      },
      {
        path: "messages",
        element: (
          <LazyPage>
            <AdminMessages />
          </LazyPage>
        ),
      },
      {
        path: "posts",
        element: (
          <LazyPage>
            <AdminPosts />
          </LazyPage>
        ),
      },
      {
        path: "posts/new",
        element: (
          <LazyPage>
            <AdminPostNew />
          </LazyPage>
        ),
      },
      {
        path: "posts/edit/:id",
        element: (
          <LazyPage>
            <AdminPostEdit />
          </LazyPage>
        ),
      },
      {
        path: "books",
        element: (
          <LazyPage>
            <AdminBooks />
          </LazyPage>
        ),
      },
      {
        path: "books/new",
        element: (
          <LazyPage>
            <AdminBookNew />
          </LazyPage>
        ),
      },
      {
        path: "books/edit/:id",
        element: (
          <LazyPage>
            <AdminBookEdit />
          </LazyPage>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);