import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { TransHeroTemplate } from "../atoms";
import { useEffect } from "react";

const AirTrans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  return (
    <>
      <TransHeroTemplate
        title={t("transpages.air.title")}
        classBg="air-trans__bg"
      />
      <section className=" conditions__section">
        <div className="container"></div>
      </section>
      <ClientForm />
    </>
  );
};
export default AirTrans;
