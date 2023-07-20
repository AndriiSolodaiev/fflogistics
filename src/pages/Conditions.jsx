import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { imgSrcMaker } from "../helpers/imgSrcMaker";

const Conditions = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className=" page-hero__wrapper conditions__bg-img">
        <h2 className="page-title container ">{t("conditions.title")}</h2>
      </div>
      <section className=" conditions__section">
        <div className="container conditions__text-content">
          <p className="conditions__subtitle">{t("conditions.subtitle")}</p>
          {/* <div className="conditions__bg-img"></div> */}
          {/* <img
            src={imgSrcMaker("tablet/conditions-boxes.jpg")}
            alt="packing example"
            loading="lazy"
            className="conditions__img-boxes"
          /> */}
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
