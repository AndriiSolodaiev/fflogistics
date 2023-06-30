import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { Form } from "react-router-dom";

const AirTransportation = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container page-hero__wrapper">
        <h2 className="page-title">{t("conditions.title")}</h2>
        <Form />
      </div>
      <section className=" conditions__section">
        <div className="container"></div>
      </section>
      <ClientForm />
    </div>
  );
};
export default AirTransportation;
