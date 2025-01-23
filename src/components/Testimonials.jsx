import React, { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "/placeholder.svg",
  },
  {
    id: 2,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "/placeholder.svg",
  },
  {
    id: 3,
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    rating: 4.5,
    avatar: "/placeholder.svg",
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const newIndex =
        direction === "left"
          ? Math.max(activeIndex - 1, 0)
          : Math.min(activeIndex + 1, testimonials.length - 1);

      setActiveIndex(newIndex);

      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index) => {
    if (scrollRef.current) {
      setActiveIndex(index);
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-10" style={{ backgroundColor: "#1C4670" }}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          What peoples says about us
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white text-[#1478F1] hover:bg-[#FFA229] hover:text-white transition-colors"
            disabled={activeIndex === 0}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white text-[#1478F1] hover:bg-[#FFA229] hover:text-white transition-colors"
            disabled={activeIndex === testimonials.length - 1}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden snap-x snap-mandatory"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="min-w-full flex-shrink-0 snap-center px-4"
          >
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <img src="/assets/quote.png" alt="Quote" className="w-8 h-8" />
                <div className="flex">{renderStars(testimonial.rating)}</div>
              </div>
              <p className="text-gray-600 mb-8">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-8 bg-[#FFA229]" : "w-2 bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
