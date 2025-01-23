import React, { useRef, useState, useEffect } from "react";

const FAQ = () => {
  const scrollRef = useRef(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 2,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 3,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 4,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 5,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 6,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
    {
      id: 7,
      name: "Chris",
      role: "Student and CEO, FinalTouch, USA",
      rating: 4.5,
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure amet consectetur adipisicing elit ut aliquip ex ea commodo consequat.",
      avatar: "public/assets/pic.png",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, you can recover deleted files from your desktop using our software. The process is simple and straightforward.",
    },
    {
      id: 2,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Yes, our software supports recovery of deleted files from desktop computers and laptops.",
    },
    {
      id: 3,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Our software is designed to help you recover deleted files from your desktop efficiently.",
    },
    {
      id: 4,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "The software includes powerful features for desktop file recovery.",
    },
    {
      id: 5,
      question: "Can I recover deleted files from desktop with this software?",
      answer:
        "Desktop file recovery is one of the core features of our software.",
    },
  ];

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.offsetWidth;
        const scrollPosition = scrollRef.current.scrollLeft;
        const index = Math.round(scrollPosition / cardWidth);
        setCurrentIndex(index);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      const newIndex =
        direction === "left"
          ? Math.max(currentIndex - 1, 0)
          : Math.min(currentIndex + 1, Math.ceil(testimonials.length / 3) - 1);
      scrollToIndex(newIndex);
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.10777 1.8541C8.70647 0.0114808 11.3133 0.0114803 11.912 1.8541L12.7063 4.29862C12.974 5.12267 13.7419 5.68059 14.6084 5.68059H17.1787C19.1161 5.68059 19.9217 8.15982 18.3543 9.29862L16.2748 10.8094C15.5739 11.3187 15.2805 12.2214 15.5483 13.0455L16.3426 15.49C16.9413 17.3326 14.8323 18.8649 13.2649 17.7261L11.1855 16.2153C10.4845 15.706 9.53528 15.706 8.83431 16.2153L6.75488 17.7261C5.18745 18.8649 3.07849 17.3326 3.67719 15.49L4.47147 13.0455C4.73921 12.2214 4.4459 11.3187 3.74492 10.8094L1.66549 9.29862C0.098063 8.15982 0.903614 5.68059 2.84106 5.68059H5.41138C6.27783 5.68059 7.04575 5.12267 7.31349 4.29862L8.10777 1.8541Z"
          fill="#FFC226"
        />
      </svg>
    ));
  };

  return (
    <div className="w-full bg-white">
      {/* Testimonials Section */}
      <section className="pl-10 py-16" style={{ backgroundColor: "#1C4670" }}>
        <div className="flex justify-between items-center mb-8 ">
          <h2 className="text-2xl font-bold text-white">
            What people say about us
          </h2>
          <div className="flex gap-2 mr-10">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white text-[#1478F1] border hover:bg-[#FFA229]"
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
              className="p-2 rounded-full bg-white text-[#1478F1] border hover:bg-[#FFA229] hover:text-white"
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

        <div ref={scrollRef} className="flex overflow-x-hidden scroll-smooth">
          {[...Array(Math.ceil(testimonials.length / 3))].map(
            (_, groupIndex) => (
              <div key={groupIndex} className="flex min-w-full gap-6">
                {testimonials
                  .slice(groupIndex * 3, groupIndex * 3 + 3)
                  .map((testimonial) => (
                    <div key={testimonial.id} className="w-1/3 flex-shrink-0">
                      <div className="bg-white rounded-lg border p-6 shadow-sm h-full">
                        <div className="flex justify-between mb-6">
                          <img
                            src="/assets/quote.png"
                            alt=""
                            className="w-8 h-8"
                          />
                          <span className="items-center inline-flex">
                            {renderStars(testimonial.rating)}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "w-2 bg-[#FFA229]" : "w-2 bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-[#EB8D15] text-center text-sm font-medium mb-2">
          FAQ
        </p>
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequent Ask Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border rounded-lg gradient-border">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() =>
                  setActiveQuestion(activeQuestion === faq.id ? null : faq.id)
                }
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeQuestion === faq.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-[#1C4670] text-white px-5 py-3 rounded-lg hover:bg-[#1e3a8a]/90 inline-flex items-center gap-2">
            Show more
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66667 10H15.5M11.3333 5L15.7441 9.41074C16.0695 9.73618 16.0695 10.2638 15.7441 10.5893L11.3333 15"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-[#1C4670] relative h-[440px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="  items-center">
            {/* Content */}
            <div className="relative z-10 pl-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Manage Your Services by your Mobile Phone
              </h2>
              <p className="text-blue-100 mb-8 max-w-lg">
                Download our app to manage and track your services. Our app
                enables you to stay in touch with our experts and aids you in
                tracking your progress.
              </p>
              <div className="flex flex-wrap gap-4 mt-10 pt-5">
                <a
                  href="#"
                  className="inline-block bg-white text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center p-2 gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-[#A5C937] fill-current"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-xl font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-block  bg-white text-black px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center p-2 gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-[#A5C937]  fill-current"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div>
                      <div className="text-xs">Get it on</div>
                      <div className="text-xl font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockups */}

            <div className="absolute top-20 z-10 right-60  w-[320px] md:w-[320px] lg:w-[380px] aspect-[1/2] ">
              <img src="public\assets\Phone.png" className="w-full h-full " />
            </div>
            <div className="absolute top-0  z-10 right-0 w-[440px] md:w-[320px] lg:w-[380px] aspect-[1/2]">
              <img src="public\assets\Phone.png" className="w-full h-full " />
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,70,112,0)_0%,#1C4670_100%)]" />
      </section>
    </div>
  );
};

export default FAQ;
