import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

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
