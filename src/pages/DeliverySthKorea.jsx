import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";
import { CountryHeroTemplate } from "atoms/CountriesPageHero";

const DeliverySthKorea = () => {
  const { t } = useTranslation();
  return (
    <>
      <CountryHeroTemplate
        title={t("countriespages.SthKorea.title")}
        classBg="sth-korea__bg"
        tariff={t("countriespages.SthKorea.tariff.value")}
        terms={t("countriespages.SthKorea.terms.value")}
        page={t("header.nav.countries")}
        unit={t("countriespages.SthKorea.unit")}
      />
      <section className=" conditions__section">
        <div className="container">
          <ul className="content__list">
            <li>
              <p className="korea__intro">
                {t("countriespages.SthKorea.content.intro")}
              </p>
            </li>
            <li>
              <p className="korea__bold">
                <b>{t("countriespages.SthKorea.content.bold")}</b>
              </p>
            </li>
            <li>
              <ul className="korea__general">
                {t("countriespages.SthKorea.content.general")
                  .split("&")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </li>
            <li>
              <p className="">
                <b>
                  <i>{t("countriespages.SthKorea.content.bold-sea")}</i>
                </b>
              </p>
            </li>
            <li>
              <ul className="list-sea">
                {t("countriespages.SthKorea.content.list-sea")
                  .split("&")
                  .map((item, index) => (
                    <li key={index} className="list-sea__item">
                      {item}
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <p>{t("countriespages.SthKorea.content.air")}</p>
            </li>
          </ul>
        </div>
      </section>
      <ClientForm />
    </>
  );
};
export default DeliverySthKorea;
