import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { lazy } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
const Conditions = lazy(() => import("./pages/Conditions"));
const AirTrans = lazy(() => import("./pages/AirTrans"));
const RailTrans = lazy(() => import("./pages/RailTrans"));
const SeaTrans = lazy(() => import("./pages/SeaTrans"));
const DeliverySthKorea = lazy(() => import("./pages/DeliverySthKorea"));
const DeliveryEurope = lazy(() => import("./pages/DeliveryEurope"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/transportation-requirements" element={<Conditions />} />
        <Route path="/delivery-from-Europe" element={<DeliveryEurope />} />
        <Route path="/delivery-from-SthKorea" element={<DeliverySthKorea />} />
        <Route path="/air-transportation" element={<AirTrans />} />
        <Route path="/sea-transportation" element={<SeaTrans />} />
        <Route path="/rail-transportation" element={<RailTrans />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:articleId" element={<ArticlePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
