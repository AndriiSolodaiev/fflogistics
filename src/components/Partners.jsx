import { partnersLogos } from "../dictionary";

import Slider from "react-slick";
export const Partners = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: false,
  };
  return (
    <section id="partners">
      <Slider {...settings}>
        {partnersLogos.map(({ id, src, alt }) => (
          <div key={id} className="partner-slide">
            <img loading="lazy" src={src} alt={alt} className="partners__img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};
