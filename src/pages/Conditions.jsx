import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";

const Conditions = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" page-hero__wrapper conditions__bg-img">
        <h2 className="page-title container ">{t("conditions.title")}</h2>
      </div>
      <section className=" conditions__section conditions__section-bg">
        <div className="container conditions__text-content">
          <p className="conditions__subtitle">{t("conditions.subtitle")}</p>

          <ol className="conditions__list">
            {t("conditions.list")
              .split("$")
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ol>
        </div>
      </section>
      <ClientForm />
    </div>
  );
};
export default Conditions;
