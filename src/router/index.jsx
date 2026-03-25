import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";
import AdminLayout from "../components/admin/AdminLayout/AdminLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails/BlogDetails"));
const BookReviews = lazy(() => import("../pages/BookReviews/BookReviews"));
const BookReviewDetails = lazy(() =>
  import("../pages/BookReviewDetails/BookReviewDetails")
);
const Achievements = lazy(() => import("../pages/Achievements/Achievements"));
// const Academia = lazy(() => import("../pages/Academia/Academia"));
const Coursework = lazy(() => import("../pages/Coursework/Coursework"));

const Contact = lazy(() => import("../pages/Contact/Contact"));
const ProjectDetails = lazy(() =>
  import("../pages/ProjectDetails/ProjectDetails")
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

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
const AdminBookEdit = lazy(() =>
  import("../pages/AdminBookEdit/AdminBookEdit")
);



function PageLoader() {
  return <div style={{ padding: "40px" }}>Loading...</div>;
}

function LazyPage({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyPage>
            <Home />
          </LazyPage>
        ),
      },
      {
        path: "blog",
        element: (
          <LazyPage>
            <Blog />
          </LazyPage>
        ),
      },
      {
        path: "blog/:slug",
        element: (
          <LazyPage>
            <BlogDetails />
          </LazyPage>
        ),
      },
      {
        path: "book-reviews",
        element: (
          <LazyPage>
            <BookReviews />
          </LazyPage>
        ),
      },
      {
        path: "book-reviews/:slug",
        element: (
          <LazyPage>
            <BookReviewDetails />
          </LazyPage>
        ),
      },


      {
        path: "coursework",
        element: (
          <LazyPage>
            <Coursework />
          </LazyPage>
        ),
      },


      // {
      //   path: "academia",
      //   element: (
      //     <LazyPage>
      //       <Academia />
      //     </LazyPage>
      //   ),
      // },


      {
        path: "achievements",
        element: (
          <LazyPage>
            <Achievements />
          </LazyPage>
        ),
      },


      {
        path: "contact",
        element: (
          <LazyPage>
            <Contact />
          </LazyPage>
        ),
      },
      {
        path: "projects/:slug",
        element: (
          <LazyPage>
            <ProjectDetails />
          </LazyPage>
        ),
      },
    ],
  },
  {
    path: "/admin/login",
    element: (
      <LazyPage>
        <AdminLogin />
      </LazyPage>
    ),
    errorElement: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
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
    element: (
      <LazyPage>
        <NotFound />
      </LazyPage>
    ),
  },
]);