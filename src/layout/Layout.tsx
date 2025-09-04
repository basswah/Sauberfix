import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
