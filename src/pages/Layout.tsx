import Header from "../components/Header";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="container">
        <Header/>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
