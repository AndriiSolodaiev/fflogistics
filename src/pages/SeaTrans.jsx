import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { CountryHeroTemplate, TransInfoCards } from "../atoms";
import { useEffect } from "react";
import { svgHrefMaker } from "helpers";

const SeaTrans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { t } = useTranslation();
  const contentPath = "transpages.sea.content.";
  const advantageIconArray = [
    { id: 1, iconHref: svgHrefMaker("icon-economy") },
    { id: 2, iconHref: svgHrefMaker("icon-flexibility") },
    { id: 3, iconHref: svgHrefMaker("icon-reliability") },
  ];
  return (
    <>
      <CountryHeroTemplate
        title={t("transpages.sea.title")}
        classBg="sea-trans__bg"
        tariff={t("transpages.sea.tariff.value")}
        terms={t("transpages.sea.terms.value")}
        page={t("header.nav.services")}
        unit={t("transpages.sea.title")}
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

            <li>
              <ul className="content__advantage-list">
                {advantageIconArray.map(({ id, iconHref }) => (
                  <li key={id} className="content__advantage-card ">
                    <svg className="content__advantage-icon">
                      <use href={iconHref}></use>
                    </svg>

                    <h4 className="card__title">
                      {t(`${contentPath}listItems.advantage${id}.title`)}
                    </h4>
                    <ul className="content__advantage-descr-list">
                      {t(`${contentPath}listItems.advantage${id}.list`)
                        .split("&")
                        .map((item, index) => (
                          <li key={index} className="list-sea__item">
                            {item}
                          </li>
                        ))}
                    </ul>
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
