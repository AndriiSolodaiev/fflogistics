import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Suspense> */}
        <Outlet />
        {/* </Suspense> */}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
