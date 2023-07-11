import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { TransHeroTemplate, TransInfoCards } from "../atoms";
import { useEffect } from "react";

const SeaTrans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const contentPath = "transpages.sea.content.";

  return (
    <>
      <TransHeroTemplate
        title={t("transpages.sea.title")}
        classBg="sea-trans__bg"
      />
      <section className=" conditions__section">
        <div className="container">
          <TransInfoCards />
          <ul className=" content__list">
            <li>{t(`${contentPath}intro`)}</li>
            <li className="article-content__list-title">
              {t(`${contentPath}listTitle`)}
            </li>
            <li>
              <ul className="list-sea">
                {t(`${contentPath}listItems`)
                  .split("&")
                  .map((item, index) => (
                    <li key={index} className="list-sea__item">
                      {item}
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <ul className="content__list">
                {t(`${contentPath}general`)
                  .split("&")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <ClientForm />
    </>
  );
};
export default SeaTrans;
