import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BookReviews from "./pages/BookReviews";
import Achievements from "./pages/Achievements";
import Travel from "./pages/Travel";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/book-reviews" element={<BookReviews />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;