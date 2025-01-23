import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      author: "Prabhaah Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/assets/Blog1.png",
      tags: [
        { name: "Tax & Audit", color: "text-purple-600 bg-purple-50" },
        { name: "Management", color: "text-blue-600 bg-blue-50" },
      ],
    },
    {
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/assets/Blog2.png",
      tags: [
        { name: "Tax", color: "text-blue-600 bg-blue-50" },
        { name: "Research", color: "text-green-600 bg-green-50" },
        { name: "Compliance", color: "text-red-600 bg-red-50" },
      ],
    },
    {
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/assets/Blog3.png",
      tags: [
        { name: "Audit", color: "text-purple-600 bg-purple-50" },
        { name: "Money Back", color: "text-green-600 bg-green-50" },
      ],
    },
    {
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/assets/Blog4.png",
      tags: [
        { name: "Money", color: "text-purple-600 bg-purple-50" },
        { name: "Management", color: "text-blue-600 bg-blue-50" },
      ],
    },
    {
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/assets/Blog5.png",
      tags: [
        { name: "Tax Return", color: "text-green-600 bg-green-50" },
        { name: "News", color: "text-red-600 bg-red-50" },
        { name: "Audit", color: "text-purple-600 bg-purple-50" },
      ],
    },
    {
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/assets/Blog6.png",
      tags: [
        { name: "Private Limited Company", color: "text-blue-600 bg-blue-50" },
        { name: "Customer Success", color: "text-green-600 bg-green-50" },
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#EB8D15] uppercase tracking-wide text-sm font-medium mb-2">
            Explore our blogs
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Accelerate Digital Transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 mx-10">
          {blogs.map((blog, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden  mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-between">
                  {blog.title}
                  <svg
                    className="transform transition-transform group-hover:translate-x-1 "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#1A1A1A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>

                <p className="text-gray-600 mb-4">{blog.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-sm ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1C4670] text-white px-6 py-3 rounded-lg hover:bg-[#1e3a8a]/90 inline-flex items-center">
            Show more blogs
            <svg
              className="w-4 h-4 ml-2"
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
    </section>
  );
};

export default BlogSection;
