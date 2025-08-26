import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex justify-center items-center w-full flex-1">
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 w-full max-w-s sm:max-w-md md:max-w-2xl lg:max-w-3xl shadow-lg mx-auto"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-purple-100 h-fit"
              >
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-80 object-cover rounded-xl mb-4"
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold text-lg text-gray-800">{content.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Projects;
