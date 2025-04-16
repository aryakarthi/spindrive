import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { cars } from "../data/cars.js";
import { CarCard, Hero } from "../components";
import { Link, useLocation } from "react-router-dom";
import { faqItems } from "@/data/faq.js";
import { LuChevronDown } from "react-icons/lu";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const location = useLocation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (location.state?.scrollTo === "faq") {
      const el = document.getElementById("faq");
      setTimeout(() => {
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <main className="mt-20">
      <Hero />
      <section className="py-4 bg-slate-100">
        <div className="container">
          <div className="py-2">
            <div className="flex justify-between items-center my-3 px-4">
              <h2 className="text-xl text-zinc-600 font-bold">Popular Cars</h2>
              <Link to="cars" className="text-cyan-600 font-semibold">
                View All
              </Link>
            </div>
          </div>
          {cars.length > 0 ? (
            <>
              <div className="my-4">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={true}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                  modules={[Autoplay]}
                  className="!p-1"
                >
                  {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                      <CarCard car={car} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <>
              <div className="w-full py-4 text-center">
                <h2 className="text-2xl font-bold">No Cars Found!</h2>
              </div>
            </>
          )}
        </div>
      </section>
      <section id="faq" className="scroll-mt-20">
        <div className="container">
          <div className="text-center py-8">
            <p className="text-cyan-600 font-light text-xl mb-2">
              Spin Drive FAQs.
            </p>
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-md text-zinc-600">
              Discover easy self-drive solutions with Madras Selfdrive Cars.
              Learn about simple bookings, competitive pricing, and our flexible
              pickup/drop services throughout Chennai for your convenience.
            </p>
          </div>
          <div className="max-w-5xl mx-auto pb-10">
            <div className="space-y-2">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden"
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-md">{item.question}</span>
                    <LuChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 p-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-md">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
