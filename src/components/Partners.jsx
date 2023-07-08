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
    <section id="partners" className="partners-section">
      <Slider {...settings}>
        {partnersLogos.map(({ id, src, alt, srcWebp }) => (
          <div key={id} className="partner-slide">
            <picture>
              <source srcSet={srcWebp} type="image/webp" />

              <img
                loading="lazy"
                src={src}
                alt={alt}
                className="partners__img"
              />
            </picture>
          </div>
        ))}
      </Slider>
    </section>
  );
};
