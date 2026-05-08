import { Suspense } from "react";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="layout-main">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
