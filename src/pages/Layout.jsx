import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />

        <Footer />
      </main>
    </>
  );
};

export default Layout;
