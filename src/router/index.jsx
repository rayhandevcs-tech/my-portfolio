// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home/Home";
// import Blog from "../pages/Blog/Blog";
// import BlogDetails from "../pages/BlogDetails/BlogDetails";
// import BookReviews from "../pages/BookReviews/BookReviews";
// import Achievements from "../pages/Achievements/Achievements";
// import Travel from "../pages/Travel/Travel";
// import Research from "../pages/Research/Research";
// import Contact from "../pages/Contact/Contact";
// import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
// import NotFound from "../pages/NotFound/NotFound";
// import AdminMessages from "../pages/AdminMessages/AdminMessages";
// import AdminPosts from "../pages/AdminPosts/AdminPosts";
// import AdminPostNew from "../pages/AdminPostNew/AdminPostNew";
// import AdminPostEdit from "../pages/AdminPostEdit/AdminPostEdit";
// import AdminLogin from "../pages/AdminLogin/AdminLogin";
// import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "blog", element: <Blog /> },
//       { path: "blog/:slug", element: <BlogDetails /> },
//       { path: "book-reviews", element: <BookReviews /> },
//       { path: "achievements", element: <Achievements /> },
//       { path: "travel", element: <Travel /> },
//       { path: "research", element: <Research /> },
//       { path: "contact", element: <Contact /> },
//       { path: "projects/:slug", element: <ProjectDetails /> },

//       { path: "admin/login", element: <AdminLogin /> },

//       {
//         path: "admin/messages",
//         element: (
//           <ProtectedRoute>
//             <AdminMessages />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts",
//         element: (
//           <ProtectedRoute>
//             <AdminPosts />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts/new",
//         element: (
//           <ProtectedRoute>
//             <AdminPostNew />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts/edit/:id",
//         element: (
//           <ProtectedRoute>
//             <AdminPostEdit />
//           </ProtectedRoute>
//         ),
//       },

//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

// import React, { Suspense, lazy } from "react";
// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";

// import Home from "../pages/Home/Home";
// import Blog from "../pages/Blog/Blog";
// import BlogDetails from "../pages/BlogDetails/BlogDetails";
// import BookReviews from "../pages/BookReviews/BookReviews";
// import Achievements from "../pages/Achievements/Achievements";
// import Travel from "../pages/Travel/Travel";
// import Research from "../pages/Research/Research";
// import Contact from "../pages/Contact/Contact";
// import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
// import NotFound from "../pages/NotFound/NotFound";

// import ProtectedRoute from "../components/auth/ProtectedRoute/ProtectedRoute";

// const AdminLogin = lazy(() => import("../pages/AdminLogin/AdminLogin"));
// const AdminMessages = lazy(() => import("../pages/AdminMessages/AdminMessages"));
// const AdminPosts = lazy(() => import("../pages/AdminPosts/AdminPosts"));
// const AdminPostNew = lazy(() => import("../pages/AdminPostNew/AdminPostNew"));
// const AdminPostEdit = lazy(() => import("../pages/AdminPostEdit/AdminPostEdit"));

// function LazyPage({ children }) {
//   return <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>{children}</Suspense>;
// }

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "blog", element: <Blog /> },
//       { path: "blog/:slug", element: <BlogDetails /> },
//       { path: "book-reviews", element: <BookReviews /> },
//       { path: "achievements", element: <Achievements /> },
//       { path: "travel", element: <Travel /> },
//       { path: "research", element: <Research /> },
//       { path: "contact", element: <Contact /> },
//       { path: "projects/:slug", element: <ProjectDetails /> },

//       {
//         path: "admin/login",
//         element: (
//           <LazyPage>
//             <AdminLogin />
//           </LazyPage>
//         ),
//       },
//       {
//         path: "admin/messages",
//         element: (
//           <ProtectedRoute>
//             <LazyPage>
//               <AdminMessages />
//             </LazyPage>
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts",
//         element: (
//           <ProtectedRoute>
//             <LazyPage>
//               <AdminPosts />
//             </LazyPage>
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts/new",
//         element: (
//           <ProtectedRoute>
//             <LazyPage>
//               <AdminPostNew />
//             </LazyPage>
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "admin/posts/edit/:id",
//         element: (
//           <ProtectedRoute>
//             <LazyPage>
//               <AdminPostEdit />
//             </LazyPage>
//           </ProtectedRoute>
//         ),
//       },

//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

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
const AdminMessages = lazy(() => import("../pages/AdminMessages/AdminMessages"));
const AdminPosts = lazy(() => import("../pages/AdminPosts/AdminPosts"));
const AdminPostNew = lazy(() => import("../pages/AdminPostNew/AdminPostNew"));
const AdminPostEdit = lazy(() => import("../pages/AdminPostEdit/AdminPostEdit"));

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

      {
        path: "admin/login",
        element: (
          <LazyPage>
            <AdminLogin />
          </LazyPage>
        ),
      },
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