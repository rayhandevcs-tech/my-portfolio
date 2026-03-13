import React, { Suspense, lazy } from "react";
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

import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";

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
      { path: "achievements", element: <Achievements /> },
      { path: "travel", element: <Travel /> },
      { path: "research", element: <Research /> },
      { path: "contact", element: <Contact /> },
      { path: "projects/:slug", element: <ProjectDetails /> },

      /* ===== Admin Login ===== */
      {
        path: "admin/login",
        element: (
          <LazyPage>
            <AdminLogin />
          </LazyPage>
        ),
      },

      /* ===== Admin Dashboard ===== */
      {
        path: "admin/dashboard",
        element: (
          <ProtectedRoute>
            <LazyPage>
              <AdminDashboard />
            </LazyPage>
          </ProtectedRoute>
        ),
      },

      /* ===== Admin Messages ===== */
      {
        path: "admin/messages",
        element: (
          <ProtectedRoute>
            <LazyPage>
              <AdminMessages />
            </LazyPage>
          </ProtectedRoute>
        ),
      },

      /* ===== Admin Posts ===== */
      {
        path: "admin/posts",
        element: (
          <ProtectedRoute>
            <LazyPage>
              <AdminPosts />
            </LazyPage>
          </ProtectedRoute>
        ),
      },

      /* ===== Create Post ===== */
      {
        path: "admin/posts/new",
        element: (
          <ProtectedRoute>
            <LazyPage>
              <AdminPostNew />
            </LazyPage>
          </ProtectedRoute>
        ),
      },

      /* ===== Edit Post ===== */
      {
        path: "admin/posts/edit/:id",
        element: (
          <ProtectedRoute>
            <LazyPage>
              <AdminPostEdit />
            </LazyPage>
          </ProtectedRoute>
        ),
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);