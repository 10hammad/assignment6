"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James Nduku",
      position: "Software Developer",
      image: "/josephng.jpg", 
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 2,
      name: "Erick Kipkemboi",
      position: "Scrum Master",
      image: "/james.jpg",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
    {
      id: 3,
      name: "Stephen Kerubo",
      position: "UI/UX Designer",
      image: "john.jpg",
      rating: 5,
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Customer Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span
                      key={index}
                      className="text-yellow-500 text-lg mx-0.5"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.name}`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
