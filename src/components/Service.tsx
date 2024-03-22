import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";

const Service = ({ services }) => {
  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>

          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {services.map((service, idx: number) => (
              <SwiperSlide className="swiper-slide" key={idx}>
                {" "}
                <div className="service-item">
                  <span className={`service-item-logo`}>
                    <img
                      src={service.image.url}
                      width="100px"
                      height="auto"
                      alt="service"
                    />
                  </span>
                  <h4>{service.name}</h4>
                  <p>{service.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Service;
