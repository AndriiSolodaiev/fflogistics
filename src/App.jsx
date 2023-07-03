import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { lazy } from "react";

const Conditions = lazy(() => import("./pages/Conditions"));
const AirTrans = lazy(() => import("./pages/AirTrans"));
const RailTrans = lazy(() => import("./pages/RailTrans"));
const SeaTrans = lazy(() => import("./pages/SeaTrans"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="transportation-requirements" element={<Conditions />} />
        <Route path="delivery-from-Europe" element="DeliveryEurope" />
        <Route path="delivery-from-SthKorea" element="DeliverySthKorea" />
        <Route path="delivery-from-UAE" element="DeliveryUAE" />
        <Route path="air-transportation" element={<AirTrans />} />
        <Route path="sea-transportation" element={<SeaTrans />} />
        <Route path="rail-transportation" element={<RailTrans />} />
        <Route path="blog" element="Blog" />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
