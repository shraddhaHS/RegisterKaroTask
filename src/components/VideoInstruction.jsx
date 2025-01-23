import React from "react";

const VideoInstruction = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08996 16.01 3.08996 11.12V6.73C3.08996 5.91 3.70996 4.98 4.47996 4.67L10.05 2.39C11.3 1.88 12.71 1.88 13.96 2.39L19.53 4.67C20.29 4.98 20.92 5.91 20.92 6.73V11.12H20.91Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 12L10.58 14.83L16.25 9.17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "No Hidden Fee",
      description:
        "Everything is at before you with no hidden charges or conditions",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9H9.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9H15.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Guaranteed Satisfaction",
      description:
        "We ensure that you stay more satisfied with our offered services",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-purple-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26003 15 3.41003 18.13 3.41003 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-orange-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08996 16.01 3.08996 11.12V6.73C3.08996 5.91 3.70996 4.98 4.47996 4.67L10.05 2.39C11.3 1.88 12.71 1.88 13.96 2.39L19.53 4.67C20.29 4.98 20.92 5.91 20.92 6.73V11.12H20.91Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
    },
  ];

  return (
    <div className="w-full">
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <p className="text-orange-500 uppercase text-sm font-medium mb-2">
            Why RegisterKaro.in
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Why Choose Register Karo
          </h2>
          <p className="text-gray-600 mt-2 order-5">
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg  ${
                index === 0
                  ? "bg-red-50"
                  : index === 1
                  ? "bg-green-50"
                  : index === 2
                  ? "bg-blue-50"
                  : index === 3
                  ? "bg-purple-50"
                  : "bg-red-50"
              }`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#1C4670] text-white">
        <div className="max-w-7xl mx-auto px-16 py-16 flex flex-col lg:flex-row items-center  gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Our Video Introductions</h2>
            <p className="text-[#AAB5CD] mb-8">
              Visit ipsum egestas tellus placerat. Mattis port sed faucibus
              magna volutpat pellentesque a nima tincture quis fell.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div>
                  <div className="w-16 h-16  rounded-full bg-[#FFA229] flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_8796_28)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 4C10.8454 4 6.66669 8.17868 6.66669 13.3333C6.66669 16.7392 8.49098 19.719 11.2157 21.3488C11.3265 21.3386 11.44 21.3333 11.5556 21.3333H14.6667V17.3333H13.3334C12.597 17.3333 12 16.7364 12 16C12 15.2636 12.597 14.6667 13.3334 14.6667H16H18.6667C19.4031 14.6667 20 15.2636 20 16C20 16.7364 19.4031 17.3333 18.6667 17.3333H17.3334V21.3333H20.4445C20.56 21.3333 20.6735 21.3386 20.7843 21.3488C23.5091 19.719 25.3334 16.7392 25.3334 13.3333C25.3334 8.17868 21.1547 4 16 4ZM12 25.3333L12 24L20 24V25.3333C20 26.8061 18.8061 28 17.3334 28H14.6667C13.1939 28 12 26.8061 12 25.3333Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_8796_28"
                          x="4.66669"
                          y="3"
                          width="22.6667"
                          height="28"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_8796_28"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_8796_28"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>{" "}
                </div>
                <div className="mx-2">
                  <h3 className="font-bold text-md mb-2">
                    Explore ideas together
                  </h3>
                  <p className="text-[#AAB5CD] text-sm">
                    Engage audience segments and really create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FFA229] flex items-center justify-center">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_8796_40)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4 8.26667C4 6.77319 4 6.02646 4.29065 5.45603C4.54631 4.95426 4.95426 4.54631 5.45603 4.29065C6.02646 4 6.77319 4 8.26667 4H23.7333C25.2268 4 25.9735 4 26.544 4.29065C27.0457 4.54631 27.4537 4.95426 27.7094 5.45603C28 6.02646 28 6.77319 28 8.26667V19.7333C28 21.2268 28 21.9735 27.7094 22.544C27.4537 23.0457 27.0457 23.4537 26.544 23.7094C25.9735 24 25.2268 24 23.7333 24H17.8855L20.9428 27.0573C21.4635 27.578 21.4635 28.4222 20.9428 28.9429C20.4221 29.4636 19.5779 29.4636 19.0572 28.9429L16 25.8857L12.9428 28.9429C12.4221 29.4636 11.5779 29.4636 11.0572 28.9429C10.5365 28.4222 10.5365 27.578 11.0572 27.0573L14.1145 24H8.26667C6.77319 24 6.02646 24 5.45603 23.7094C4.95426 23.4537 4.54631 23.0457 4.29065 22.544C4 21.9735 4 21.2268 4 19.7333V8.26667ZM22.1311 9.59837C22.7211 10.0389 22.8423 10.8744 22.4017 11.4645L18.9148 16.1344C18.4807 16.7159 17.6866 16.8924 17.047 16.5498L14.4969 15.1837L11.6414 18.2432C11.139 18.7815 10.2952 18.8106 9.75691 18.3082C9.21858 17.8057 9.18949 16.962 9.69193 16.4237L13.1775 12.6891C13.6314 12.2028 14.3559 12.0829 14.9423 12.397L17.3959 13.7115L20.265 9.86903C20.7055 9.27898 21.541 9.15781 22.1311 9.59837Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_8796_40"
                          x="2"
                          y="3"
                          width="28"
                          height="29.3334"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_8796_40"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_8796_40"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="mx-2">
                  <h3 className="font-bold text-md mb-2">
                    Bring those ideas to life
                  </h3>
                  <p className="text-[#AAB5CD] text-sm">
                    Engage audience segments and really create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1478F1] to-[#000000] opacity-35 " />
              <img
                src="public/assets/Vector.png"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />

              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-25 h-25">
                <img
                  src="public/assets/youtube-logo-png-46016 2.png"
                  alt="YouTube Icon"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoInstruction;
