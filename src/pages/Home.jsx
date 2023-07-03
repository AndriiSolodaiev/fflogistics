import { useLocation } from "react-router-dom";
import {
  Advantages,
  BlogSection,
  ClientForm,
  Delivery,
  Hero,
  Partners,
  PaymentHelp,
  RoadMap,
  Services,
} from "../components";
import { useEffect } from "react";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.section) {
      const sectionElement = document.querySelector(
        `#${location.state.section}`
      );

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <Delivery />
      <RoadMap />
      <PaymentHelp />
      <Advantages />
      <BlogSection />
      <ClientForm />
      <Partners />
    </>
  );
};
