import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>

      <div className=" min-h-[calc(100vh-245px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
