import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import GoogleAnalytics from "./components/common/GoogleAnalytics/GoogleAnalytics";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <GoogleAnalytics />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </LanguageProvider>
  );
}

export default App;