import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import GoogleAnalytics from "./components/common/GoogleAnalytics/GoogleAnalytics";

function App() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;