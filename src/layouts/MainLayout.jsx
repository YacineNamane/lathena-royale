import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { useScroll } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import MobileNavigation from "../components/Navbar/MobileNavigation/MobileNavigation";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../router/ScrollToTop";

function MainLayout() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <ScrollToTop />

      <Navbar heroProgress={scrollYProgress} />
      <MobileNavigation />

      <main className="main-content">
        <Outlet
          context={{
            heroRef,
            heroProgress: scrollYProgress,
          }}
        />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
