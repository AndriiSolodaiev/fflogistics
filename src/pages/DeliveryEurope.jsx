import { useTranslation } from "react-i18next";
import { ClientForm } from "../components";

import { CountryHeroTemplate } from "atoms/CountriesPageHero";

const DeliveryEurope = () => {
  const { t } = useTranslation();
  return (
    <>
      <CountryHeroTemplate
        title={t("countriespages.Europe.title")}
        classBg="europe__bg"
        tariff={t("countriespages.Europe.tariff.value")}
        terms={t("countriespages.Europe.terms.value")}
        page={t("header.nav.countries")}
        unit={t("countriespages.Europe.unit")}
      />
      <section className=" conditions__section">
        <div className="container">
          {" "}
          <ul className="content__list">
            <li>
              <p>
                <b>{t("countriespages.Europe.content.subtitle")}</b>
              </p>
            </li>
            <li>
              <p className="korea__bold">
                {t("countriespages.Europe.content.general")}
              </p>
            </li>
            <li>
              <p>
                <b>
                  <i>{t("countriespages.Europe.content.bold-auto")}</i>
                </b>
              </p>
            </li>
            <li>
              <ul className="list-sea">
                {t("countriespages.Europe.content.list-auto")
                  .split("&")
                  .map((item, index) => (
                    <li key={index} className="list-sea__item">
                      {item}
                    </li>
                  ))}
              </ul>
            </li>
            <li>
              <p>{t("countriespages.Europe.content.ending")}</p>
            </li>
          </ul>
        </div>
      </section>
      <ClientForm />
    </>
  );
};
export default DeliveryEurope;
