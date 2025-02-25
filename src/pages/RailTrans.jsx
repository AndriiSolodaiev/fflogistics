import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { CountryHeroTemplate, TransInfoCards } from "../atoms";
import { useEffect } from "react";

const RailTrans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const contentPath = "transpages.rail.content.";
  return (
    <>
      <CountryHeroTemplate
        title={t("transpages.rail.title")}
        classBg="rail-trans__bg"
        tariff={t("transpages.rail.tariff.value")}
        terms={t("transpages.rail.terms.value")}
        page={t("header.nav.services")}
        unit={t("transpages.rail.title")}
        disclaimer={true}
        sale={true}
      />
      <section className=" conditions__section">
        <div className="container">
          <TransInfoCards
            tariff={t(`${contentPath}tariff`)}
            weight={t(`${contentPath}weight`)}
            tariffComp={t(`${contentPath}tariffComp`)}
            weightComp={t(`${contentPath}weightComp`)}
          />
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
            <li className="article-content__list-title">
              {t(`${contentPath}goodsListTitle`)}
            </li>
            <li>
              <ul className="list-sea">
                {t(`${contentPath}goodsListItems`)
                  .split("&")
                  .map((item, index) => (
                    <li key={index} className="list-sea__item">
                      {item}
                    </li>
                  ))}
              </ul>
            </li>

            <li>
              {t(`${contentPath}conclusions`)}
              {/* <b>{t(`${contentPath}warning`)}</b> */}
              {/* {t(`${contentPath}conclusions-ending`)} */}
            </li>
          </ul>
        </div>
      </section>
      <ClientForm />
    </>
  );
};
export default RailTrans;
